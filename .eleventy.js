const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  
  // Copier les images
  eleventyConfig.addPassthroughCopy("assets");

  // Filtre pour formater les dates joliment (ex: 24 mars 2026)
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).setLocale("fr").toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};