if (process.env.NODE_ENV === "production") {
  module.exports = {
    provider: process.env.UPLOAD_PROVIDER_TYPE,
    providerOptions: {
      cloud_name: process.env.UPLOAD_PROVIDER_CLOUD_NAME,
      api_key: process.env.UPLOAD_PROVIDER_API_KEY,
      api_secret: process.env.UPLOAD_PROVIDER_API_SECRET,
    },
  };
} else {
  module.exports = {};
}
