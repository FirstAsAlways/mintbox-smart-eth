const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: [
      path.resolve(__dirname, "./src"),
      path.resolve(__dirname, "./public"),
    ],
    compress: true,
    liveReload: true,
    historyApiFallback: true,
    port: 3000,
    hot: true,
    // removed in v4
    // replaced by "static"
    // watchContentBase: true,
    // inline: true
  },
  devtool: "inline-source-map",
});
