module.exports = ({ env }) => ({
  email: {
    provider: env("EMAIL_PROVIDER"),
    providerOptions: {
      host: env("EMAIL_SMTP_HOST"),
      port: env("EMAIL_SMTP_PORT"),
      auth: {
        user: env("EMAIL_SMTP_USER"),
        pass: env("EMAIL_SMTP_PASS"),
      },
    },
    settings: {},
  },
});
