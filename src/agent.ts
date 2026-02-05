import { blModel, blTools } from "@blaxel/langgraph";
import { HumanMessage } from "@langchain/core/messages";
import { tool } from "@langchain/core/tools";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { z } from "zod";

interface Stream {
  write: (data: string) => void;
  end: () => void;
}

export default async function agent(
  input: string,
  stream: Stream
): Promise<void> {
  const llm = await blModel("sandbox-openai");
  const graph = createReactAgent({
    llm,
    prompt: "If the user ask for the weather, use the weather tool.",
    tools: [
      ...(await blTools(["blaxel-search"])),
      tool(
        async (input: any) => {
          console.debug("TOOLCALLING: local weather", input);
          return `The weather in ${input.city} is sunny`;
        },
        {
          name: "weather",
          description: "Get the weather in a specific city",
          schema: z.object({
            city: z.string(),
          }),
        }
      ),
    ],
  });

  const streamResponse = graph.streamEvents(
    {
      messages: [new HumanMessage(input)],
    },
    {
      version: "v2",
    }
  );

  for await (const event of streamResponse) {
    if (event.event === "on_chat_model_stream") {
      const chunk = event.data.chunk;
      if (chunk && chunk.content) {
        const content = typeof chunk.content === "string" ? chunk.content : String(chunk.content);
        // Only write content if there are no tool call chunks (avoid streaming tool call tokens)
        if (content && (!chunk.tool_call_chunks || chunk.tool_call_chunks.length === 0)) {
          stream.write(content);
        }
      }
    }
  }

  stream.end();
}
