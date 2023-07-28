const { createProxyMiddleware } = require("http-proxy-middleware")

const baseUrl = "https://s5.aconvert.com/convert/"

// const v1 = 'permission/v1/'
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: 'http://192.168.1.207:8082/',
      // target: 'http://192.168.1.41:8080/',
      // target: 'http://192.168.1.166:8666/',
      // target: 'http://yuewen.ghgame.cn:18000/',
      // target: 'https://devgamegh.qidian.com/',
      target: baseUrl,
      /*
       * 默认为false： 发送请求头中host会取当前本地localhost地址
       *  设置为true：  发送请求头中host会设置成当前target·
       */
      changeOrigin: true,
      // 是否去除前缀，根据业务场景去除
      pathRewrite: {
        "^/api": "",
      },
    })
  )
  // app.use(
  //   createProxyMiddleware('/apc', {
  //     // target: 'http://192.168.1.207:8081/',
  //     // target: 'http://yuewen.ghgame.cn:18000/permission/v1/',
  //     // target: 'https://devgamegh.qidian.com/permission/v1/',
  //     target: baseUrl,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/apc': '',
  //     },
  //   })
  // )
  // app.use(
  //   createProxyMiddleware('/apg', {
  //     // target: 'http://192.168.1.197:9091/',
  //     // target: 'http://yuewen.ghgame.cn:18000/',
  //     // target: 'https://devgamegh.qidian.com/',
  //     target: baseUrl,
  //     /*
  //      * 默认为false： 发送请求头中host会取当前本地localhost地址
  //      *  设置为true：  发送请求头中host会设置成当前target·
  //      */
  //     changeOrigin: true,
  //     // 是否去除前缀，根据业务场景去除
  //     pathRewrite: {
  //       '^/apg': '',
  //     },
  //   })
  // )
  // app.use(
  //   createProxyMiddleware('/apb', {
  //     // target: 'http://192.168.1.116:8080/',
  //     // target: 'http://yuewen.ghgame.cn:18000/',
  //     // target: 'https://devgamegh.qidian.com/',
  //     target: baseUrl,
  //     /*
  //      * 默认为false： 发送请求头中host会取当前本地localhost地址
  //      *  设置为true：  发送请求头中host会设置成当前target·
  //      */
  //     changeOrigin: true,
  //     // 是否去除前缀，根据业务场景去除
  //     pathRewrite: {
  //       '^/apb': '',
  //     },
  //   })
  // )
  // // rap2 经分
  // app.use(
  //   createProxyMiddleware('/rapb', {
  //     // target: 'http://192.168.1.166:38080/app/mock/16/',
  //     // target: 'http://192.168.1.166:8666/',
  //     // target: 'https://devgamegh.qidian.com/',
  //     target: baseUrl,
  //     /*
  //      * 默认为false： 发送请求头中host会取当前本地localhost地址
  //      *  设置为true：  发送请求头中host会设置成当前target·
  //      */
  //     changeOrigin: true,
  //     // 是否去除前缀，根据业务场景去除
  //     pathRewrite: {
  //       '^/rapb': '',
  //     },
  //   })
  // )
  // // rap2 权限
  // app.use(
  //   createProxyMiddleware('/rapp', {
  //     // target: 'http://192.168.1.166:38080/app/mock/17/permission/v1/',
  //     // target: 'https://devgamegh.qidian.com/permission/v1/',
  //     target: baseUrl,
  //     /*
  //      * 默认为false： 发送请求头中host会取当前本地localhost地址
  //      *  设置为true：  发送请求头中host会设置成当前target·
  //      */
  //     changeOrigin: true,
  //     // 是否去除前缀，根据业务场景去除
  //     pathRewrite: {
  //       '^/rapp': '',
  //     },
  //   })
  // )
  // app.use(
  //   createProxyMiddleware('/rapsql', {
  //     // target: 'http://192.168.1.166:38080/app/mock/17/permission/v1/',
  //     // target: 'http://192.168.1.166:38080/app/mock/17/permission/v1/',
  //     // target: 'http://192.168.1.166:8666/',
  //     // target: 'http://192.168.1.216:8888/', //
  //     // target: 'https://devgamegh.qidian.com/',
  //     target: baseUrl,
  //     // target: 'https://devgamegh.qidian.com/',
  //     /*
  //      * 默认为false： 发送请求头中host会取当前本地localhost地址
  //      *  设置为true：  发送请求头中host会设置成当前target·
  //      */
  //     changeOrigin: true,
  //     // 是否去除前缀，根据业务场景去除
  //     pathRewrite: {
  //       '^/rapsql': '',
  //     },
  //   })
  // )
  // 问卷端地址
  // app.use(
  //   createProxyMiddleware('/qs', {
  //     // target: 'http://192.168.1.166:38080/app/mock/17/permission/v1/',
  //     // target: 'http://192.168.1.166:38080/app/mock/17/permission/v1/',
  //     // target: 'http://192.168.1.166:8666/',
  //     // target: 'http://192.168.1.216:8888/', //
  //     // target: 'https://devgamegh.qidian.com/',
  //     // target: 'http://192.168.1.166:8050/',
  //     target: baseUrl,
  //     /*
  //      * 默认为false： 发送请求头中host会取当前本地localhost地址
  //      *  设置为true：  发送请求头中host会设置成当前target·
  //      */
  //     changeOrigin: true,
  //     // 是否去除前缀，根据业务场景去除
  //     pathRewrite: {
  //       '^/qs': '',
  //     },
  //   })
  // )
}
