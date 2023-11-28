const path = require("path");

// Relationship in source directory
// This works because author passes a source relationship. 
// But it isn't what we need. 
function sourceHrefRel(thisInputPath, href) {
  let split = thisInputPath.split("/");
  split.pop();

  return path.resolve(split.join(path.sep), href);
}


module.exports = eleventyConfig => {

  eleventyConfig.addAsyncShortcode(
    "inlink", 
    async function exLink(display, href) {

      // href is the relationship between content in `src`
      // So this works, but isn't what we ultimately need.
      let sourceHref = sourceHrefRel(this.page.inputPath, href);
      let sourceRel = path.relative(this.page.inputPath, sourceHref);
      
      console.log("======================================");
      console.log(path.resolve(this.page.inputPath));
      console.log(sourceHref);
      console.log(sourceRel);
      console.log("======================================")

  });
}
