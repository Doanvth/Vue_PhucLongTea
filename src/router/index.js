import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import MenuLayoutView from "../views/Menu/MenuLayoutView.vue";
import ProductView from "../views/Menu/ProductView.vue";
import PackagedProductLayoutView from "../views/PackagedProducts/PackagedProductLayoutView.vue";
import PackagedProductView from "../views/PackagedProducts/PackagedProductView.vue"

const routes = [
  { path: "/", component: Home },
  {
    path: "/menu",
    component: MenuLayoutView,
    redirect: "/menu/tra-trai-cay",
    props: true,
    children : [
      { 
        path: ":category",
        component: ProductView,
        props: true
      }
    ]
  },
  {
    path: "/packaged-product",
    component: PackagedProductLayoutView,
    redirect: "/packaged-product/tra-hop-giay",
    props: true,
    children : [
      { 
        path: ":category",
        component: PackagedProductView,
        props: true
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
