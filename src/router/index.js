import { createRouter, createWebHistory } from "vue-router";
import App from '../App.vue'
import HomeView from "../views/HomeView.vue";
import ShoppingCard from "../views/ShoppingCard.vue";
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

const routes = [
  {
    path: "/",
    component: App,
    children: [
      { path: "", name: "home", component: HomeView },
      { path: "shopping-card", name: "shopping-card", component: ShoppingCard },
      { path: 'product-detail', name: 'product-detail', component: ProductDetailView },
      { path: 'product-pack-detail', name: 'product-pack-detail', component: ProductPackDetailView },
    ],
  },
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
    ],
  },
  {
    path: "/admin",
    component: LayoutAdmin,
    meta: { requiresAdmin: true }, // Chỉ admin mới vào được
    children: [
      // { path: "dashboard", name: "dashboard", component: AdminDashboardView },
      {
        path: 'product',
        children: [
          // { path: 'list', name: 'list', component: Table },
          { path: 'insert', name: 'insert', component: InsertProductView },
          // { path: 'update/:id', name: 'update', component: Update },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
