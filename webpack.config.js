const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      filename: "index.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};
