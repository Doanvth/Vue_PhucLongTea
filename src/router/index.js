import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Auth from "../views/AuthView.vue"
import LoginView from "../layouts/Auth/LoginView.vue";
import PasswordView from "../layouts/Auth/PasswordView.vue"
import RegisterView from "../layouts/Auth/RegisterView.vue"
import ForgotPassword from "../layouts/Auth/ForgotPassword.vue";
import OtpView from "../layouts/Auth/OtpView.vue";
const routes = [
  { path: "/", component: Home },
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
