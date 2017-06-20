
  const routes = [
  // --- 首页
    {
      path: '/home',
      name: 'Home',
      redirect: '/Home/index',
      component: r => require.ensure([], () => r(require('../view/Home/index.vue')), 'home_index'),
      children: [
        {
          path: 'index',
          component: r => require.ensure([], () => r(require('../view/Home/index.vue')), 'home_index')
        }
      ]
    }
  ]
  export default routes
