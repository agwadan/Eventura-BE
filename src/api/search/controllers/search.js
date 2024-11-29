"use strict";

/**
 * A set of functions called "actions" for `search`
 */

module.exports = {
  async trackSearch(ctx) {
    const { query } = ctx.request.body;
    const user = ctx.state.user || null; // Assuming user is authenticated (optional)

    if (!query) {
      return ctx.badRequest("Search query is required.");
    }

    try {
      // Create and store the search query in the database
      await strapi.services["search-query"].create({
        query,
        user: user ? user.id : null, // If user is logged in, store user ID
        timestamp: new Date(),
      });

      ctx.send({ message: "Search query tracked successfully" });
    } catch (error) {
      ctx.throw(500, "Error tracking search query");
    }
  },
};
