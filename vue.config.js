module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@components": "@/components",
        "@commonComp": "@/components/common",
        "@views": "@/views",
        "@utils": "@/utils",
        "@api": "@/api",
        "@assets": "@/assets",
        "@images": "@/assets/images"
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
