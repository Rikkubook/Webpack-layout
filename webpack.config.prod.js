const path = require("path");
const glob = require('glob'); //node-glob
// const CopyPlugin = require("copy-webpack-plugin");

const getEntry = () => {
  const entry = {};
  glob.sync('./src/pages/*').forEach((route) => {
    console.log(route)
    const end = route.length
    const start = 12
    const chunk = route.slice(start,end)
    entry[chunk] = route + '/js/index.js'
  });
  return entry;
};

module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].js",
  }
};