const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "..", "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./public/index.html"),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
