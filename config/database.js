module.exports = ({ env }) => {
  if (env("NODE_ENV") === "development") {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "mongoose",
          settings: {
            client: "mongo",
            uri: "mongodb://localhost:27017",
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    };
  } else {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "mongoose",
          settings: {
            client: "mongo",
            uri: env("DATABASE_URI"),
          },
          options: {
            ssl: true,
          },
        },
      },
    };
  }
};
