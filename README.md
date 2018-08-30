# react-cnode
cnode of react

基于CRA构建第三方cnode社区-PC端

## 在线预览
[点我预览](http://rainbowvs.com/cnode/index.html)

## 技术栈
- "axios": "^0.18.0",
- "react": "^16.4.2",
- "react-dom": "^16.4.2",
- "react-loadable": "^5.5.0",
- "react-router-dom": "^4.3.1",
- "react-scripts": "1.1.4",
- "react-transition-group": "^2.4.0",
- "redux": "^4.0.0",
- "react-redux": "^5.0.7",
- "redux-saga": "^0.16.0",
- "immutable": "^3.8.2",
- "redux-immutable": "^4.0.0",
- "simplemde": "git+https://github.com/rainbowvs/simplemde-markdown-editor.git",
- "github-markdown-css": "^2.10.0",
- "styled-components": "^3.4.2"

## 功能
> 以下功能均基于[社区API](https://cnodejs.org/api)实现

由于社区禁用收藏功能接口, 已无法实现
- [x] 话题首页
- [x] 话题详情
- [x] 新建话题
- [x] 编辑话题
- [x] 新建评论
- [x] 为评论点赞
- [x] 用户详情
- [x] 登录
- [ ] 收藏相关
- [ ] 消息相关

## 优化
> 暂时只做代码方面浅层优化, 待RN版更新后一起优化

目前考虑到的部分优化
- 渲染
  - 继承基类改写shouldComponentUpdate
- 代码性能
  - Immutable.js高级运用
- 架构
  - Webpack定制code split
  
## 总结
作为React的入门项目, 通过该项目基本掌握React的开发流程

接下来会进行RN版的开发, 深入并掌握React全家桶

## 交流
:hammer: 欢迎提issue互相交流学习