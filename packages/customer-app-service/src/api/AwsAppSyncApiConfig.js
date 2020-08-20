class _AwsAppSyncApiConfig {
  constructor() {
    this.apiConfigs = {};
  }

  addConfig(apiId, config) {
    this.apiConfigs[apiId] = config;
  }

  getConfig(apiId) {
    return this.apiConfigs[apiId];
  }
}

const AwsAppSyncApiConfig = new _AwsAppSyncApiConfig();
Object.freeze(AwsAppSyncApiConfig);
export default AwsAppSyncApiConfig;
