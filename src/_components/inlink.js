const path = require("path");

module.exports = eleventyConfig => {

  eleventyConfig.addAsyncShortcode(
    "inlink", 
    async function exLink(display, href) {

      // href is the relationship between content in `src`
      // Is there a way to track down this page and get its `page.outputPath`?

      let relPath = path.relative(this.page.outputPath, href)

      return `<a href="${relPath}">${display}</a> : <span>${relPath}</span>`

  });
}
