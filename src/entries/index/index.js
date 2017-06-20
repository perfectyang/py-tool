// 共用模块
import bootstrap from '@/bootstrap'
import Router from '@/router'
import routes from './router'
// 入口视图组件
import Component from './view'

// 注册多页面共用组件
// import * as LocalComponents from './components'

// 启动app
bootstrap({
  Router,
  Component,
  routes
})
// 注册本地全局组件
// Object.values(LocalComponents).forEach(component => {
//   Vue.component(component.name, component)
// })
