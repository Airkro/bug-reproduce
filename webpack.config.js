const { resolve } = require("path");

module.exports = {
  mode: "development",
  target: "node",
  devtool: false,
  entry: "stylelint",
  output: {
    path: resolve("dist")
  }
};
