module.exports = function(eleventyConfig) {
  
  // Copie des dossiers statiques vers le site généré (_site)
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("actus");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Traducteur de date
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