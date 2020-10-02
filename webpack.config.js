module.exports = {
  module: {
    rules: [
      { test: /.(woff(2)?|woff|ttf|eot|svg)(?v=d+.d+.d+)?$/, 
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/' } }] }

    ],
  },
}

