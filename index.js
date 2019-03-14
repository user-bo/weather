// 1
// module.exports = () => {
//   console.log('Welcome to the outside');
// }

const minimist = require('minimist')
const error = require('./utils/error')
module.exports = () => {
  // 使用.slice(2)删除前两个参数的原因是，
  // 第一个参数始终是解释器，后面跟着被解释的文件的名称
  // 'C:\\software\\node\\node.exe'
  // C:\\Users\\huang\\AppData\\Roaming\\npm\\node_modules\\demo2\\bin\\outside\\index.js
  const args = minimist(process.argv.slice(2))
  
  let cmd = args._[0] || 'help';
  
  if(args.version || args.v) {
    cmd = 'version'
  }

  if(args.help || args.h) {
    cmd = 'help'
  }
  
  switch (cmd) {
    case 'today':
      require('./cmds/today')(args)
      break
    case 'version':
      require('./cmds/version')(args)
      break
    case 'help':
      require('./cmds/help')(args)
      break
    case 'forecast':
      require('./cmds/forecast')(args)
      break
    default:
      error(`"${cmd}" is not a valid command!`, true)
      break
  }
}