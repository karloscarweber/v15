const path = require("path");

module.exports = {
  mode: "production",
  entry: "./assets/js/scripts.js",
  output: {
    path: path.resolve(__dirname, "./assets/built"),
    filename: "application.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "./assets/js")],
        loader: "babel-loader",
        options: {
          presets: [ '@babel/preset-env' ],
          plugins: [ '@babel/plugin-proposal-class-properties' ]
        }
      },
    ]
  },
  // use: {
  //   load: 'babel-loader',
  //   options: {
  //     presets: [
  //       '@babel/preset-env'
  //     ],
  //     plugins: [
  //       '@babel/plugin-proposal-class-properties'
  //     ]
  //   }
  // }
};
