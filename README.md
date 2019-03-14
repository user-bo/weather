# weather


# 发布命令行遇到的问题
## 问题1：
问题表现：
  code EPERM 
  errno -4048 
  syscall unlink
问题原因：
  没有登录npm
问题解决：
  运行：npm login
  （注意：登录时需要输入邮箱，后面发布时，还得先认证邮箱，所以请填写正确的邮箱）

## 问题2
问题表现
npm ERR! no_perms Private mode enable, only admin can publish this module
问题原因：
把npm的镜像代理到淘宝或者别的地方了
问题解决：
设置回原来的镜像
npm config set registry=http://registry.npmjs.org

## 问题3
问题表现：
publish Failed PUT 403
code E403
You do not have permission to publish ***
问题原因：
在npm仓库上可能存在与你同名的npm包
问题解决：
修改自己的npm包名字