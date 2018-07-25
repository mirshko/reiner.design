const htmlStandards = require("reshape-standard");
const cssStandards = require("spike-css-standards");
const jsStandards = require("spike-js-standards");
const pageId = require("spike-page-id");
const env = process.env.SPIKE_ENV;

module.exports = {
  devtool: "source-map",
  ignore: [
    "**/layout.html",
    "**/_*",
    "**/.*",
    "readme.md",
    "yarn.lock",
    "package-lock.json"
  ],
  reshape: htmlStandards({
    locals: ctx => {
      return {
        pageId: pageId(ctx),
        gaTrackingId: process.env.GA_TRACKING_ID,
        URL: process.env.URL || "",
        DEPLOY_URL: process.env.DEPLOY_URL || "",
        DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || ""
      };
    },
    minify: env === "production"
  }),
  postcss: cssStandards({
    path: ["./node_modules"],
    cssnano: {
      mergeLonghand: false
    },
    minify: env === "production",
    warnForDuplicates: env !== "production"
  }),
  babel: jsStandards()
};
