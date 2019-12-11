const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const Dotenv = require('dotenv-webpack')

const common = require('./webpack.config.js')

module.exports = merge(common, {
  // devtool: 'source-map',
  mode: 'production',
  entry: [path.join(__dirname, 'src/index.ts')],
  externals: [nodeExternals({})],
  plugins: [new Dotenv({ path: './.env.prod' }), new CleanWebpackPlugin()],
})
