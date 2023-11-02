'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-yt-summarize')
      .service('myService')
      .getWelcomeMessage();
  },
});
