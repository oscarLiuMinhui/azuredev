# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Azure development environment with Node.js and Azure SDK integration.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
npm run test:watch

# Code quality
npm run lint
npm run format

# Azure CLI commands
az login
az account set --subscription <subscription-id>
```

## Project Structure

- `src/config/` - Azure configuration and credentials
- `src/services/` - Azure service integrations
- `src/utils/` - Utility functions
- `tests/` - Test files

## Environment Setup

1. Copy `.env.example` to `.env`
2. Fill in Azure credentials and configuration
3. Run `az login` to authenticate with Azure CLI
4. Install dependencies with `npm install`

## Azure Services Configured

- Azure Identity (DefaultAzureCredential)
- Blob Storage
- Cosmos DB
- Service Bus
- Key Vault
- ARM Resources

## Important Notes

- Never commit `.env` files or secrets
- Use Azure Key Vault for production secrets
- DefaultAzureCredential handles authentication automatically