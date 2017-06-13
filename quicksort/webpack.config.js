
module.exports = {
  entry: {

  },
  output: {

  },
  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        loader: "bable-loader?presets[]=es2015&plugins[]=transform-object-rest-spread"
      }
    ]
  },
  plugins: {

  }
};