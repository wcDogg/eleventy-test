/* Eleventy Configuration */ 

// Construct plugins + shortcodes
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const pluginInLink = require('./src/_components/link.js');

// All Eleventy configs go here.
module.exports = function (eleventyConfig) {

  //
  // Plugins
  eleventyConfig.setQuietMode(true);  
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(directoryOutputPlugin);
  eleventyConfig.addPlugin(pluginInLink); // link display, href, x, aClass

  //
  // Collections
  eleventyConfig.addCollection("blog", function (collectionAPI) {
    return collectionAPI.getFilteredByGlob("./src/content/blog/**/*.{html,md}");
  });

  eleventyConfig.addCollection("docs", function (collectionAPI) {
    return collectionAPI.getFilteredByGlob("./src/content/docs/**/*.{html,md}");
  });

  //
  // Passthrough copy, same directory structure.
  // Unlike watch, this can take many forms.
  eleventyConfig.addPassthroughCopy({
    "./src/css/": "/css/",
    "./src/images/": "/images/",
    "./src/js/": "/js/",
    "./src/video/": "/video/",
    "./src/favicons": "/"
	});

  //
  // Watch. Arg is a single string.
  // Cannot pass list or dict - TypeError.
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addWatchTarget("./src/js/");

  //
  // Give me something :)
  return {
    // In and out directories
    dir: {
      input: "src",
      data: "_data", 
      includes: "_includes",
      output: "public"
    },
    // Template engines override. Default = Liquid.
    templateFormats: ["md", "html", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };

}; // end module.exports

