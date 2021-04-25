"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const { username } = ctx.params;
    let entitys;
    if (username) {
      entitys = await strapi.services.events.find({
        "owner.username": username,
      });
    } else {
      entitys = await strapi.services.events.find();
    }
    return sanitizeEntity(entitys, { model: strapi.models.events });
  },
};
