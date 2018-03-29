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
    path: '/walls',
    name: 'walls',
    component: () => import('../components/pages/Walls.page.vue')
  },
  {
    path: '/foundation',
    name: 'foundation',
    component: () => import('../components/pages/Foundation.page.vue')
  }
];

export default new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});
