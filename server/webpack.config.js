const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
  },
  target: 'node',
  node: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: [
    nodeExternals({
      additionalModuleDirs: [path.resolve(__dirname, '../node_modules')],
    }),
  ],
  plugins: [new CleanWebpackPlugin(), new Dotenv()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
};
