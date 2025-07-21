const { DefaultAzureCredential } = require('@azure/identity');
require('dotenv').config();

const azureConfig = {
  credentials: new DefaultAzureCredential(),
  subscriptionId: process.env.AZURE_SUBSCRIPTION_ID,
  tenantId: process.env.AZURE_TENANT_ID,
  clientId: process.env.AZURE_CLIENT_ID,
  storage: {
    accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME,
    accountKey: process.env.AZURE_STORAGE_ACCOUNT_KEY
  },
  cosmosDb: {
    endpoint: process.env.COSMOS_DB_ENDPOINT,
    key: process.env.COSMOS_DB_KEY
  },
  serviceBus: {
    connectionString: process.env.SERVICE_BUS_CONNECTION_STRING
  },
  keyVault: {
    url: process.env.KEY_VAULT_URL
  }
};

module.exports = azureConfig;