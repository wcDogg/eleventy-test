// postcss.config.js
const postcssJitProps = require('postcss-jit-props');
const path = require('path');

module.exports = {
  plugins: [
    // https://github.com/GoogleChromeLabs/postcss-jit-props#usage
    postcssJitProps({
      files: [
        // https://open-props.style/#jitprops
        path.resolve(__dirname, 'node_modules/open-props/open-props.min.css'),
      ]
    }),
    require('autoprefixer'),
    require('postcss-minify')
  ]
}
