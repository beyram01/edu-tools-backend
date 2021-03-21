module.exports = {
  // GET /hello
  async index(ctx) {
    // to check if user authenticated
    const obj = {
      authenticated: true,
      user: ctx.state.user,
    };
    ctx.send(obj);
  },
};
