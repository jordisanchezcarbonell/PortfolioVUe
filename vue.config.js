module.exports = {
  baseUrl: "/Kazukun23/",
  lintOnSave: false,

  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },

}
