module.exports = function(eleventyConfig) {
  
  // On demande à Eleventy de copier tes images
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("actus");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("assets/gazette");

  // On crée notre traducteur de date "maison" (sans installation)
  eleventyConfig.addFilter("formatDate", (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};