var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    'turntable': './develop/turntable.js',
    'main': './develop/run.js'
  },
  output: {
    path: path.resolve(__dirname, './src'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets[]=es2015&plugins[]=transform-object-rest-spread"
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name:"chunk",
      filename:"init.js"
    })
  ]
};