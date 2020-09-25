const { override, addLessLoader, addPostcssPlugins } = require("customize-cra");
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    importLoaders: true,
    modifyVars: {}
  }),
  addPostcssPlugins([
    require('tailwindcss'),
    require('autoprefixer'),
  ])
);
