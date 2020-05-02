module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.vue-electron-boilerplate.app",
        productName: "vue-electron-boilerplate",
        win: {
          icon: "src/assets/logo.png",
          target: [
            {
              target: "nsis",
              arch: ["x64", "ia32"]
            }
          ]
        },
        nsis:{
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true
        },
        publish: [
          {
            provider: "github",
            owner: "ChrisMichaelPerezSantiago",
            repo: "vue-electron-boilerplate",
            releaseType: "draft",
          }
        ]
      }
    }
  }
}