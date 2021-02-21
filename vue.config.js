// 关闭ESlint，反向代理
module.exports = {
  // lintOnSave:false
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}
