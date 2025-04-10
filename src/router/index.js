import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import MenuLayoutView from "../views/Menu/MenuLayoutView.vue";
import ProductView from "../views/Menu/ProductView.vue";


const routes = [
  { path: "/", component: Home },
  { 
    path: "/menu/:category",
    component: ProductView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
