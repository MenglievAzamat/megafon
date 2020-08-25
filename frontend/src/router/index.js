import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      type: "default"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Home,
    meta: {
      type: "login"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Home,
    meta: {
      type: "register"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
