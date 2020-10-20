module.exports = ({ env }) => ({
  defaultConnection: "default",
  database: "content-api",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri: env("DATABASE_URI")
      },
      options: {
        ssl: true,
      },
    },
  },
});
