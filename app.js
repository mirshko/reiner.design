const htmlStandards = require("reshape-standard");
const cssStandards = require("spike-css-standards");
const jsStandards = require("spike-js-standards");
const pageId = require("spike-page-id");
const sugarml = require("sugarml");
const sugarss = require("sugarss");
const env = process.env.SPIKE_ENV;

module.exports = {
  devtool: "source-map",
  matchers: { html: "*(**/)*.html", css: "*(**/)*.sss" },
  ignore: ["**/layout.html", "**/_*", "**/.*", "readme.md", "yarn.lock"],
  reshape: htmlStandards({
    parser: false,
    locals: ctx => {
      return {
        pageId: pageId(ctx),
        gaTrackingId: process.env.GA_TRACKING_ID
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
