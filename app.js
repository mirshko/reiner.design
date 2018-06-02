const htmlStandards = require("reshape-standard");
const cssStandards = require("spike-css-standards");
const jsStandards = require("spike-js-standards");
const pageId = require("spike-page-id");
const sugarml = require("sugarml");
const sugarss = require("sugarss");
const env = process.env.SPIKE_ENV;

module.exports = {
  devtool: "source-map",
  matchers: { html: "*(**/)*.sgr", css: "*(**/)*.sss" },
  ignore: ["**/layout.sgr", "**/_*", "**/.*", "readme.md", "yarn.lock"],
  reshape: htmlStandards({
    parser: sugarml,
    locals: ctx => {
      return {
        pageId: pageId(ctx)
      };
    },
    minify: env === "production"
  }),
  postcss: cssStandards({
    path: ["./node_modules"],
    cssnano: {
      mergeLonghand: false
    },
    parser: sugarss,
    minify: env === "production",
    warnForDuplicates: env !== "production"
  }),
  babel: jsStandards()
};
