// https://jestjs.io/docs/getting-started#using-typescript
// Jest Experimental ECMAScript modules https://jestjs.io/docs/ecmascript-modules
const path = require('path');

module.exports = function (api:any) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript', ['@babel/preset-env', {targets: {node: 'current'}}]],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          root: path.resolve(),
          rootPathPrefix: '~/',
          rootPathSuffix: 'src',
        },
      ],
    ],
  };
};
