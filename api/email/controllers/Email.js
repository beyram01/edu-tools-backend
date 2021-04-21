module.exports = {
  async sendMail(ctx) {
    const { email, subject, message } = ctx.request.body;
    try {
      const emailOptions = {
        to: process.env.EMAIL_ADDRESS_FROM,
        subject: subject,
        html: `
        <h1>Sent from: ${email}</h1>
        <p>${message}</p>`,
      };
      await strapi.plugins["email"].services.email.send(emailOptions);
      ctx.send({ message: "Email sent successfully" });
    } catch (err) {
      ctx.send({ error: "Error sending email" });
    }
  },
};
