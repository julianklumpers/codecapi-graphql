const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const StartServerPlugin = require('start-server-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const common = require('./webpack.config.js')

module.exports = merge.smart(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true,
  entry: ['webpack/hot/poll?1000', path.join(__dirname, 'src/index.ts')],
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000', 'fs', 'commonjs'],
    }),
  ],
  plugins: [
    new Dotenv({
      path: './.env.dev',
    }),
    new CleanWebpackPlugin(),
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs: ['--inspect'],
      signal: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})
