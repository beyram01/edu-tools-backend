module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "dd405fee295002ad1781c62dda615592"),
    },
  },
  url: env("URL", "http://localhost:1337"),
});
