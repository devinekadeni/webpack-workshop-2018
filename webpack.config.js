const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode: mode,
      output: {
        filename: 'bundle.js', // bundled file name
      },
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader', // managing the file on the disk, is file-loader jobs behind the scene
                options: {
                  limit: 5000, // if off limit, will create in disk directory and return as hashed url, otherwise it will be inline in base64 URI data file
                },
              },
            ],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  )
}
