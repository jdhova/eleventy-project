module.exports = function (eleventyConfig) {
  // Add CSS and JS support
  eleventyConfig.addPassthroughCopy("./src/css", "./src/js");
  // eleventyConfig.addPassthroughCopy("./src/js");
  // Update CSS changes automatically
  eleventyConfig.addWatchTarget("./src/css", "./src/js");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}