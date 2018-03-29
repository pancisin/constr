import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../components/pages/Landing.page.vue')
  },
  {
    path: '/building',
    name: 'building',
    component: () => import('../components/pages/Building.page.vue'),
    children: [
      {
        path: '/building/walls',
        name: 'building.walls',
        component: () => import('../components/pages/Walls.page.vue')
      },
      {
        path: '/building/foundation',
        name: 'building.foundation',
        component: () => import('../components/pages/Foundation.page.vue')
      },
    ]
  }
];

export default new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});
