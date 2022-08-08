const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "..", "public"),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    client: {
      overlay: false,
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
