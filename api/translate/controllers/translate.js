const LanguageTranslatorV3 = require("ibm-watson/language-translator/v3");
const { IamAuthenticator } = require("ibm-watson/auth");
const languages = require("../languages");

module.exports = {
  async translate(ctx) {
    const { srcL, target, text } = ctx.request.body;

    try {
      const languageTranslator = new LanguageTranslatorV3({
        version: "2018-05-01",
        authenticator: new IamAuthenticator({
          apikey: process.env.IBM_API_KEY,
        }),
        serviceUrl: process.env.IBM_URL,
      });
      let source = srcL;

      if (srcL === "auto") {
        const identifyParams = { text };
        const ln = await languageTranslator.identify(identifyParams);
        const detectedSource = ln.result.languages[0].language;
        const languageName = languages.filter(
          (ln) => ln.language === detectedSource
        );
        source = languageName[0].language_name;
      }

      const translateParams = {
        text,
        source,
        target,
      };

      const result = await languageTranslator.translate(translateParams);
      if (result.status >= 200 && result.status < 300) {
        ctx.send({ translation: result.result });
      } else {
        throw new Error("An error occured, plz try again later.");
      }
    } catch (error) {
      ctx.send({ error: error.message });
    }
  },
};
