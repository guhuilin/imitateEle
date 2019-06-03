// 此页面无用!!!
// 此页面无用!!!

// import Vue from 'vue';
// import Router from 'vue-router';

// Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/',
      redirect: '/msite'
    },
    {
      name: 'food',
      path: '/food',
      component: Food,
    },
    {
      name: 'shop',
      path: '/shop',
      component: Shop,
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
    },
    {
      name: 'order',
      path: '/order',
      component: Order,
    },
    {
      name: 'service',
      path: '/service',
      component: Service,
    },
    {
      name: 'download',
      path: '/download',
      component: Download,
    },
    {
      name: 'benefit',
      path: '/benefit',
      component: Benefit,
    },
    {
      name: 'points',
      path: '/points',
      component: Points,
    },
    {
      name: 'search',
      path: '/search',
      component: Search,
    },
  ]
})