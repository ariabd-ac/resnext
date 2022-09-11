/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less')
const withSVG = require('./webpack-extends/svgr')

const lessConfig = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  javascriptEnabled: true,
  webpack(config) {
    return config
  },
})

const svgConfig = withSVG(lessConfig)

module.exports = {
  ...svgConfig,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
