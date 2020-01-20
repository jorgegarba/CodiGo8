const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  //darle varios archivitos al entry
  entry: {
    home: path.resolve(__dirname, "src/js/index.js")
    // otro:path.resolve(__dirname, 'src/js/otro.js'),
  },
  output: {
    //es para que me transpile en una carpeta "dist"
    path: path.resolve(__dirname, "dist"),
    //[name] para que si hay varios archivos de js para transpilar me genere varios con el nombre declarado en el entry
    filename: "js/[name].js"
  },
  //webpack.hotplugin
  devServer: {
    hot: true,
    open: true,
    port: 5000
  },
  //Aquí iran los loaders
  module: {
    rules: [
      {
        //que todos los archivos css van a pasar por un loader
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        //babel
        test: /\.js$/,
        use: ["babel-loader"],
        //Hay que excluir cosas
        exclude:/node_modules/
      }
    ]
  },
  //plugins extender
  plugins: [
    new HtmlWebpackPlugin({
      title: "Mi App",
      template:path.resolve(__dirname, "src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
