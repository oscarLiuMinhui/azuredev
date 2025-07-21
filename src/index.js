const azureConfig = require('./config/azure');

async function main() {
  console.log('Azure Development Environment initialized');
  console.log('Configuration loaded for:');
  console.log('- Subscription ID:', azureConfig.subscriptionId);
  console.log('- Storage Account:', azureConfig.storage.accountName);
  console.log('- Cosmos DB:', azureConfig.cosmosDb.endpoint);
  console.log('- Key Vault:', azureConfig.keyVault.url);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };