const path = require("path");

module.exports = (env) => ({
  mode: env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "blockchainid.js",
    libraryTarget: "umd",
    globalObject: "this",
    // libraryExport: 'default',
    library: "BlockchainID",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
    ],
  },
});
