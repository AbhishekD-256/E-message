const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
    assetModuleFilename: "images/[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./"),
    },
    port: 3000,
    open: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
