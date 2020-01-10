module.exports = {
  privateKey: '', // 本地私钥地址，位置一般在C:/Users/xxx/.ssh/id_rsa
  passphrase: '', // 本地私钥密码
  projectName: '', // 项目名称
  dev: { // 测试环境
    name: '测试环境',
    host: '', // 开发服务器地址
    port: 22, // ssh port，一般默认22
    username: '', // 登录服务器用户名
    password: '', // 登录服务器密码
    script: "npm run build", // 打包脚本
  },
  prod: { // 线上环境
    name: '线上环境',
    host: '', // 开发服务器地址
    port: 22, // ssh port，一般默认22
    username: '', // 登录服务器用户名
    password: '', // 登录服务器密码
    script: "npm run build", // 打包脚本
  }
  // 再还有多余的环境按照上面格式写即可
}