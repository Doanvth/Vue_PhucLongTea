import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

import Promotion from "../views/Promotion.vue";

const routes = [
  {
    path: '/khuyen-mai',
    name: 'PromotionList',
    component: Promotion,
    props: route => ({ page: Number(route.query.p) || 1 })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
