import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import ShoppingCard from "../views/ShoppingCard.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/shopping-card", name: "shopping-card", component: ShoppingCard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
