module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: "mongodb://localhost:27017/",
      },
      options: {},
    },
  },
});
