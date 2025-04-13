import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import MenuLayoutView from "../views/Menu/MenuLayoutView.vue";
import ProductView from "../views/Menu/ProductView.vue";
import PackagedProductLayoutView from "../views/PackagedProducts/PackagedProductLayoutView.vue";
import PackagedProductView from "../views/PackagedProducts/PackagedProductView.vue"
import ListProductView from "../views/AdminView/Product/ListProductView.vue";
import CreateProductView from "../views/AdminView/Product/CreateProductView.vue";
import EditProductView from "../views/AdminView/Product/EditProductView.vue";
import ProductLayoutView from "../views/AdminView/Product/ProductLayoutView.vue";
import LayoutAdminView from "../views/AdminView/LayoutAdminView.vue";

import Auth from "../views/AuthView.vue"
import LoginView from "../layouts/Auth/LoginView.vue";
import PasswordView from "../layouts/Auth/PasswordView.vue"
import RegisterView from "../layouts/Auth/RegisterView.vue"
import ForgotPassword from "../layouts/Auth/ForgotPassword.vue";
import OtpView from "../layouts/Auth/OtpView.vue";
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

  {
    path: "/admin",
    component: LayoutAdminView,
    meta: { requiresAdmin: true }, 
    children: [
      // { path: "dashboard", name: "dashboard", component: AdminDashboardView },
      {
        path: 'product',
        component: ProductLayoutView,
        redirect: "/product/list",
        children: [
          { path: 'list', name: 'list', component:ListProductView },
          { path: 'create', name: 'insert', component: CreateProductView },
          { path: 'edit/:id', name: 'edit', component: EditProductView },
        ],
      }
    ],
  },
  {
      path: "/auth",
      component: Auth,
      children: [
        { path: "login", name: "login", component: LoginView },
        { path: "password", name: "password", component:  PasswordView},
        { path: "register", name: "register", component:  RegisterView},
        { path: "forgot", name: "forgot", component:  ForgotPassword},
        { path: "otp", name: "otp", component:  OtpView},
      ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
