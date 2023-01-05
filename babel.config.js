// https://jestjs.io/docs/getting-started#using-typescript
// Jest Experimental ECMAScript modules https://jestjs.io/docs/ecmascript-modules
const path = require("path");

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          root: path.resolve(),
          rootPathPrefix: "~/",
          rootPathSuffix: "src",
        },
      ],
    ],
  };
};
