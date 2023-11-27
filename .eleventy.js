/* Eleventy Configuration */ 

// Construct plugins + shortcodes
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const pluginInLink = require('./src/_components/inlink.js');

// All Eleventy configs go here.
module.exports = function (eleventyConfig) {

  //
  // Plugins
  eleventyConfig.setQuietMode(true);  
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(directoryOutputPlugin);
  eleventyConfig.addPlugin(pluginInLink); 

  //
  // Collections
  eleventyConfig.addCollection("blog", function (collectionAPI) {
    return collectionAPI.getFilteredByGlob("./src/c_blog/**/*.{html,md}");
  });

  eleventyConfig.addCollection("docs", function (collectionAPI) {
    return collectionAPI.getFilteredByGlob("./src/c_docs/**/*.{html,md}");
  });

  //
  // Last but not least :)
  return {
    // In and out directories
    dir: {
      input: "src",
      data: "_data", 
      includes: "_includes",
      output: "public"
    },
    // Template engines. Default is Liquid.
    templateFormats: ["md", "html", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };

}; // end module.exports

