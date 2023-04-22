const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const mode = isProduction === true ? 'production' : 'development';

module.exports = {
  mode,
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    clean: true,
    globalObject: 'this',
    library: {
      name: 'editorjs-embed-pornhub',
      type: 'umd',
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
