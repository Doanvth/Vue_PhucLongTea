import { createRouter, createWebHistory } from "vue-router";
import App from '../App.vue'
import HomeView from "../views/HomeView.vue";
import ShoppingCard from "../views/AccountView/ShoppingCard.vue";
import InfoView from "../views/AccountView/InfoView.vue";
import VoucherView from "../views/AccountView/VoucherView.vue";
import MemberView from "../views/AccountView/MemberView.vue";
import AddressView from "../views/AccountView/AddressView.vue";
import CustomerOrderView from "../views/AccountView/CustomerOrderView.vue";
import ProductFavoriteView from "../views/AccountView/ProductFavoriteView.vue";
import OrderedProductView from "../views/AccountView/OrderedProductView.vue";
import HelpCenterView from "../views/AccountView/HelpCenterView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import ProductPackDetailView from "../views/ProductPackDetailView.vue";
import LayoutAdmin from "../views/AdminView/LayoutAdmin.vue";
import LayoutAccount from "../views/AccountView/LayoutAccount.vue";
import InsertProductView from "../views/AdminView/InsertProductView.vue";
import UserManagementView from "../views/AdminView/UserManagementView.vue";

import Home from "../views/HomeView.vue";
import MenuLayoutView from "../views/Menu/MenuLayoutView.vue";
import ProductView from "../views/Menu/ProductView.vue";
import PackagedProductLayoutView from "../views/PackagedProducts/PackagedProductLayoutView.vue";
import PackagedProductView from "../views/PackagedProducts/PackagedProductView.vue"
import ListProductView from "../views/AdminView/Product/ListProductView.vue";
import CreateProductView from "../views/AdminView/Product/CreateProductView.vue";
import EditProductView from "../views/AdminView/Product/EditProductView.vue";
import ProductLayoutView from "../views/AdminView/Product/ProductLayoutView.vue";
import Auth from "../views/AuthView.vue"
import LoginView from "../layouts/Auth/LoginView.vue";
import PasswordView from "../layouts/Auth/PasswordView.vue"
import RegisterView from "../layouts/Auth/RegisterView.vue"
import ForgotPassword from "../layouts/Auth/ForgotPassword.vue";
import OtpView from "../layouts/Auth/OtpView.vue";

const routes = [

  { path: '/product-detail/:id', name: 'product-detail', component: ProductDetailView },
  { path: '/product-pack-detail', name: 'product-pack-detail', component: ProductPackDetailView },
  { path: "/", name: "home", component: HomeView },
  {
    path: "/account",
    component: LayoutAccount,
    meta: { requiresAuth: true, requiresAdmin: false }, // Chỉ tài khoản đăng nhập, không phải admin
    children: [
      { path: "info", name: "info", component: InfoView },
      { path: "member", name: "member", component: MemberView },
      { path: "voucher", name: "voucher", component: VoucherView },
      { path: "address", name: "address", component: AddressView },
      { path: "customer-order", name: "customer-order", component: CustomerOrderView },
      { path: "product-favorite", name: "product-favorite", component: ProductFavoriteView },
      { path: "ordered-product", name: "ordered-product", component: OrderedProductView },
      { path: "help-center", name: "help-center", component: HelpCenterView },
      { path: "shopping-card", name: "shopping-card", component: ShoppingCard },
    ],
  },
  {
    path: "/admin",
    component: LayoutAdmin,
    meta: { requiresAdmin: true, hideLayout: true }, // Chỉ admin mới vào được
    children: [
      {
        path: 'product',
        component: ProductLayoutView,
        redirect: "/admin/product/list",
        children: [
          { path: 'list', name: 'list', component:ListProductView },
          { path: 'create', name: 'insert', component: CreateProductView },
          { path: 'edit/:id', name: 'edit', component: EditProductView },
        ],
      },
      { path: "user-management", name: "user-management", component: UserManagementView },
    ],
  },
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
      path: "/auth",
      component: Auth,
      meta: { hideLayout: true },
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
