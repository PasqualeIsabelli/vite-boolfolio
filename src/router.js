import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/Home.vue';
import IndexPage from './pages/Index.vue';
import ShowPage from './pages/Show.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/index',
    name: 'index',
    component: IndexPage,
  },
  {
    path: '/show/:slug',
    name: 'show',
    component: ShowPage,
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter(to, from, next) {
      window.location.href = 'http://localhost:8000/login';
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };