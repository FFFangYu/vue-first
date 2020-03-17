# 这是学习一个vue的第一个项目
参考黑马前端学习视频
# 2020 .3.12
## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用(传统方式)命令行把修改过后的代码上传到码云？？？
1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

# 2020.3.16
因为视频教程提供的api接口不可使用，故自己搭建一个nodejs 
## 编写获取轮播图的api

## 新闻资讯模块
### 新闻列表
1. 改造路由链接
2. 绘制页面
3. 使用vue-resource 获取数据
4. 渲染真实数据
### 新闻详情
1. 实现点击列表跳转到新闻详情页面
2. 改造为路由连接，同时提供唯一id
3. 创建 详情 组件
 + 布局 样式的实现
 + 发起请求
4. 在路由模块，将新闻详情的路由 与组件对应起来

# 2020.3.17
## 评论组件
很多页面都会使用评论，可以构建一个组件 comment.vue，在需要的时候注册使用
### 单独封装一个评论子组件
1. 创建一个单独的 comment.vue 组件模板
2. 在需要使用comment组件的页面中，手动导入
 + `import comment from './comment.vue`
 3. 在父组件中，使用 `components`属性，将刚才导入comment组件，注册为自己的子组件
 4. 将注册子组件时候的注册名称，以标签形式 在页面中引用即可
 ### 获取所有评论数据并渲染
  api:   api/getcomments/:artid?pageindex=1   artid的传值要注意

### 实现点击加载更多评论的功能
1. 为加载更多按钮 绑定点击事件，在事件中，请求 下一页 数据
2. 点击加载更多，让 pageIndex++  然后重新调用this.Comments()方法重新获取最新一页的数据
3. 为了防止 新数据 覆盖老数据情况，每当获取新数据的时候，就调用数组的concat方法，拼接数组

