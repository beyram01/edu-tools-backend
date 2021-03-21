const Sentry = require("@sentry/node");
Sentry.init({
  dsn:
    "https://4b823c3c6a2e4ad2b090e42c0f9d950e@o555464.ingest.sentry.io/5685251",
  environment: strapi.config.environment,
});

module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          await next();
        } catch (error) {
          Sentry.captureException(error);
          throw error;
        }
      });
    },
  };
};
