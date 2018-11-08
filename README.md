# react-cnode
cnode of react

基于create-react-app构建第三方cnode社区-PC端

## 在线预览
[点我预览](http://rainbowvs.com/cnode/index.html)

## 功能
> 以下功能均基于[社区API](https://cnodejs.org/api)实现, 近期转外国服务器, 访问可能会略慢

由于社区禁用收藏功能接口, 暂时无法实现
- [x] 话题首页
- [x] 话题详情
- [x] 新建话题
- [ ] 编辑话题
- [x] 新建评论
- [x] 为评论点赞
- [x] 用户详情
- [x] 登录
- [ ] 收藏相关
- [ ] 消息相关

## 计划
> 暂时只做简单优化, 之后抽出空闲时间慢慢补上

* 将缺少的功能补全
* 进一步完善APP, 网络请求优化
* 自搭webpack

  
## 总结
作为React的入门项目, 通过该项目基本掌握React的开发流程, 积累一定的React开发经验

开发过程遇到部分问题

* 集成redux和immutable较为复杂, 如果不是一定规模的项目尽量不使用
* simplemde插件好像缺少维护, 发现较多问题, 根据issue反应的问题fork一份进行修改
* state修改深层属性需遍历update, 代码呈现冗余, 尽量扁平设计
* 使用loadable后, 如果依赖于路由的更新要重新渲染，会出现路由更新了但是组件没有重新渲染的情况, 因为redux和mobx的这些连接方法会修改组件的`shouldComponentUpdate`。因此需保证`withRouter`在最外层

## 交流
:hammer: 欢迎提issue互相交流学习