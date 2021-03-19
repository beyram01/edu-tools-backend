module.exports = {
  jwtSecret: process.env.JWT_SECRET || "5d4215c9-7ac9-4729-be97-20ddc148f871",
  jwt: {
    expiresIn: "1d",
  },
};
