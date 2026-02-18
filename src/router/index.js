import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页' },
    component: () => import('../page/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: '关于' },
    component: () => import('../page/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
