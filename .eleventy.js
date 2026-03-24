// .eleventy.js
module.exports = function(eleventyConfig) {
  
  // Dis à Eleventy de copier le dossier 'assets' tel quel dans '_site'
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};