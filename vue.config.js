const path = require('path');

module.exports = {
  //部署github pages 时修改my-project为对应仓库名，已修改
  publicPath: process.env.NODE_ENV === 'production' ?
    '/longmen-serve/' :
    '/',

  pwa: {
    iconPaths: {
      favicon32: 'dragon.ico',
      favicon16: 'dragon.ico',
      appleTouchIcon: 'dragon.ico',
      maskIcon: 'dragon.ico',
      msTileImage: 'dragon.ico'
    }
  },

  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 包含 icons 目录
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({
        extract: false
      }).end()
      .use('svgo-loader').loader('svgo-loader')
    // .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{
      plainSprite: true
    }])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录


    // config.module
    //   .rule('svg-sprite')
    //   .test(/\.(svg)(\?.*)?$/)
    //   .include.add(dir).end()
    //   .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()
    //   .use('svgo-loader').loader('svgo-loader')
    //   .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
    //   .end()
    // config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])
    // config.module.rule('svg').exclude.add(dir)

  }
}