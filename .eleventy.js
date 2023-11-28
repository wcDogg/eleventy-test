/* Eleventy Configuration */ 

// Construct plugins + shortcodes
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const pluginInLink = require("./lib/link.js");

// All Eleventy configs go here.
module.exports = function (eleventyConfig) {
  //
  // Plugins
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(directoryOutputPlugin);
  eleventyConfig.addPlugin(pluginInLink); // link display, href, x, aClass

  //
  // Passthrough copy, same directory structure.
  // Unlike watch, this can take many forms.
  eleventyConfig.addPassthroughCopy({
    "./src/css/": "/css/",
    "./src/images/": "/images/",
    "./src/js/": "/js/",
    "./src/video/": "/video/",
    "./src/favicons": "/",
  });

  //
  // Give me something :)
  return {
    // In and out directories
    dir: {
      input: "src",
      output: "public",
    },
    // Template engines override. Default = Liquid.
    templateFormats: ["md", "html", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}; // end module.exports
