const theme = require('../_data/theme.js');

module.exports = eleventyConfig => {

  eleventyConfig.addAsyncShortcode(
    "link", 
    async function exLink(display, href, x, aClass) {

      let cls = aClass || theme.link.class;
      let rel = (x ? "external" : "internal");
      let target = (x ? "_blank" : "_self");

      return `<a class="${cls}" title="${display}" href="${href}" rel="${rel}" target="${target}">${display}</a>`;      

    });
}
