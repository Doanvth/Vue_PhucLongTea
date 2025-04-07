import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import ShoppingCard from "../views/ShoppingCard.vue";
import InfoView from "../views/AccountView/InfoView.vue";
import VoucherView from "../views/AccountView/VoucherView.vue";
import MemberView from "../views/AccountView/MemberView.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/shopping-card", name: "shopping-card", component: ShoppingCard },
  {
    path: '/account',
    // meta: { requiresAccount: true },
    children: [
      { path: 'info', name: 'info', component: InfoView },
      { path: 'member', name: 'member', component: MemberView },
      { path: 'voucher', name: 'voucher', component: VoucherView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
