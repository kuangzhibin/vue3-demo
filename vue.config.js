module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        utils: "@/utils",
        api: "@/api"
      }
    }
  },
  devServer: {
    port: 8900,
    open: true
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     changeOrigin: true
    //   }
    // }
  }
};
