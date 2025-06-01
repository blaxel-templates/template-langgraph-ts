# Blaxel LangGraph Agent  

<div align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="200"/>
</div>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
[![NPM Version](https://img.shields.io/npm/v/@blaxel/langgraph-ts.svg)](https://www.npmjs.com/package/@blaxel/langgraph-ts)

</div>

A template implementation of a conversational agent using LangGraph and GPT-4. This agent demonstrates the power of LangGraph for building interactive AI agents with toolkit integration capabilities.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Server Locally](#running-the-server-locally)
  - [Testing Your Agent](#testing-your-agent)
- [Deployment to Blaxel](#deployment-to-blaxel)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Features

- Interactive conversational interface  
- Toolkit integration support (including weather and search capabilities)  
- Streaming responses for real-time interaction  
- Built on LangGraph for efficient agent orchestration  
- Easy deployment and integration with Blaxel platform

## Quick Start

```bash
# Clone the repository
git clone https://github.com/blaxel-templates/template-langgraph-ts.git
cd template-langgraph-ts

# Install dependencies and sync tools
npm install
uv sync

# Start the development server
npm run serve -- --hotreload
```

## Prerequisites

- **Node.js** v18 or later  
- **Blaxel CLI**: `npm install -g @blaxel/cli`  Ensure Blaxel CLI is installed globally

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/blaxel-templates/template-langgraph-ts.git
cd template-langgraph-ts
npm install
uv sync
```

## Usage

### Running the Server Locally

```bash
npm run serve -- --hotreload
```

### Testing Your Agent

You can test your agent using the chat interface:

```bash
bl chat --local langgraph-agent
```

Or run it directly with custom input:

```bash
bl run agent langgraph-agent --local --data '{"input": "What is the weather in Paris?"}'
```

## Deployment to Blaxel

Deploy your application to Blaxel:

```bash
bl deploy
```

This command uses your code and configuration files under the `.blaxel` directory to deploy your application.

## API Reference

The LangGraph agent exposes the following endpoints:

- **POST** `/agents/{agent_id}/run`: Run the agent with provided input
- **GET** `/agents/{agent_id}/info`: Get information about the agent capabilities
- **GET** `/health`: Health check endpoint

For detailed API documentation, run the server and visit `http://localhost:PORT/docs`.

## Project Structure

- `src/index.ts` - Application entry point  
- `src/agent.ts` - Core agent implementation with LangGraph integration  
- `blaxel.toml` - Blaxel deployment configuration  

## Examples

### Basic Conversational Flow

```bash
bl chat --local langgraph-agent
```

### Direct Agent Run

```bash
bl run agents/langgraph-agent/run --data '{"input": "Tell me a joke."}'
```

## Troubleshooting

- Ensure you have **Node.js v18+** installed  
- Verify Blaxel CLI is up to date: `npm install -g @blaxel/cli`  
- Check for sync errors: `uv sync`  
- For CORS issues, enable CORS in `src/index.ts`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request

## Support

Need help? 

- Open an issue on GitHub  
- Check the [Blaxel Documentation](https://docs.blaxel.ai)  
- Join our [Discord Community](https://discord.gg/G3MzvUPcHP)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
