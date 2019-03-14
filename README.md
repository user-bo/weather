## 构建命令行工具-weather-cli

### 创建项目
1、初始化一个项目
```
mkdir demo
cd demo
npm init --yes
```  

2、根目录下新建文件index.js，和新建一个bin文件夹，同时新建一个outside文件夹和index.js文件
``` 
// index.js
module.exports = () => {
  console.log('Welcome to the outside');
}

// outside/index.js
#!/usr/bin/env node
require('../../')()

```
3、修改package.json文件，加上一个bin字段
```
...
"bin": {
  "outside": "bin/outside/index.js"
},
"scripts": {},
...

```
4、这样就完成一个简单的命令行工具啦。npm link后，运行weather指令，看看
5、快速开发版
```
// 第一步和1，初始化一个项目
// 第二步outside/index.js文件改为如下
#!/usr/bin/env node
const program = require('commander');

program
  .version('0.1.0')
  .option('-n, --yourname [yourname]', 'Your name')
  .option('-g, --glad', 'Tell us you are happy')
  .parse(process.argv);

if (program.yourname) {
  console.log(`Hello, ${program.yourname}! ${program.glad ? 'I am very happy to see you!' : ''}`);
}
```
6、常用工具
- Commander.js - 帮助参数解析，我最常用
- optionator - 帮助参数解析，Eslint 使用
- Inquirer.js - 常见交互式命令行
- chalk - 命令行输出自定义颜色
- minimist - 参数列表对象化

### 发布项目
执行npm publish，就可以了

## 删掉包
npm unpublish --force 
发布npm包后，半小时内，可以删除；
（曾经有一个大牛的删库事件导致很多依赖它的著名的npm包构建失败，甚至影响到了不少公司的生产环境。从那时候开始npm就更改了unpublish的策略）

## 遇到的问题
### 问题
- 问题表现：npm link 首次成功，后面unlink，再link失败
- 问题原因：可能npm缓存没清干净
- 问题解决：换了个文件夹名字

### 问题
- 问题表现：  
  code EPERM  
  errno -4048  
  syscall unlink
- 问题原因：
  没有登录npm
- 问题解决：
  运行：npm login  
  （注意：登录时需要输入邮箱，后面发布时，还得先认证邮箱，所以请填写正确的邮箱）

### 问题
- 问题表现:  
npm ERR! no_perms Private mode enable, only admin can publish this module
- 问题原因：  
把npm的镜像代理到淘宝或者别的地方了
- 问题解决：  
设置回原来的镜像  
npm config set registry=http://registry.npmjs.org

### 问题
- 问题表现：  
publish Failed PUT 403  
code E403  
You do not have permission to publish ***
- 问题原因：  
在npm仓库上可能存在与你同名的npm包
- 问题解决：  
修改自己的npm包名字  
### 参考作者
高手：[Jason Maurer](https://timber.io/blog/creating-a-real-world-cli-app-with-node/#parsing-commands-and-arguments)
高手：[PengJiyuan](https://www.jianshu.com/p/cd9cf12d0e31)