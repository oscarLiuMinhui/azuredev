const { BlobServiceClient } = require('@azure/storage-blob');
const azureConfig = require('../config/azure');

class StorageService {
  constructor() {
    this.blobServiceClient = new BlobServiceClient(
      `https://${azureConfig.storage.accountName}.blob.core.windows.net`,
      azureConfig.credentials
    );
  }

  async listContainers() {
    const containers = [];
    for await (const container of this.blobServiceClient.listContainers()) {
      containers.push(container.name);
    }
    return containers;
  }

  async uploadBlob(containerName, blobName, data) {
    const containerClient = this.blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    
    const uploadResponse = await blockBlobClient.upload(data, data.length);
    return uploadResponse;
  }

  async downloadBlob(containerName, blobName) {
    const containerClient = this.blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    
    const downloadResponse = await blockBlobClient.download();
    return downloadResponse;
  }
}

module.exports = StorageService;