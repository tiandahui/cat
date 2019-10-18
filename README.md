# cat
项目搭建
布局方式:100% + 栅格（媒体查询）
0-980-1980-max

主程搭建架构
1：预处理语言  sass  less stylus
  将config下webpack.config.js里的sass改为less
  安装less less-loader
  样式冲突：
  1:BEM命名法 保证类名不重复，组件名-功能名-具体名称
  2：css in js
  3：样式模块化
2：ui框架
  antd
3：共有插件
  redux
  router
  axios 拦截器
  webstorage
  react-loadable
4：页面文件目录
5：指定开发规范
6：共有组件
7：共有模块
