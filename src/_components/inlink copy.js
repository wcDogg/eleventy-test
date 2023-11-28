const path = require("path");

// Relationship in source directory
// This works because author passes a source relationship. 
// But it isn't what we need. 
function relInputPath(fromInPath, toHref) {
  let split = fromInPath.split("/");
  split.pop();

  return path.resolve(split.join(path.sep), toHref);
}


// Is there a way to take href and track down its outputPath?
function hrefOutputPath(href) {


  return "HREF converted to outputPath";
}

// Relationship in output directory
// Doesn't work yet because we don't know href's outputPath
function relOutputPath(fromOutPath, toOutpath) {
  let split = fromOutPath.split("/");
  split.pop();

  return path.resolve(split.join(path.sep), toOutpath);
}



module.exports = eleventyConfig => {

  eleventyConfig.addAsyncShortcode(
    "inlink", 
    async function exLink(display, href) {

      // href is the relationship between content in `src`
      // So this works, but isn't what we ultimately need.
      let relInput = relInputPath(this.page.inputPath, href);

      // Is there a way to track down the page with this href
      // and get its `page.outputPath` to pass here?
      let relOutput = relOutputPath(this.page.outputPath, href);
      
      console.log("======================================");
      console.log("this.page.inputPath : ", this.page.inputPath);
      console.log("href : ", href);
      console.log("relInput : ", relInput);
      console.log("this.page.outputPath", this.page.outputPath);
      console.log("linked page.outputPath : ");
      console.log("relOutput : ", relOutput)
      console.log("======================================")

      let screen = `<div>
        <h3>Input</h3>
        <div>this.page.inputPath : ${this.page.inputPath}</div>
        <div>href : ${href}</div>
        <div>relInputPath : ${relInput}</div>
        <h3>Output</h3>
        <div>this.page.outputPath : ${this.page.output.path}</div>
        <div>??? get page.outputPath from href</div>
        <div>relOutputPath : ${relOutput}</div>
      </div>`;

      return screen;

  });
}
