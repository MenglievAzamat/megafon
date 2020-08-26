import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Videos from "../views/Videos";
import VideosCategories from "../views/VideosCategories";
import VideosCategory from "../views/VideosCategory";
import VideoAdd from "../views/VideoAdd";
import Admin from "../views/Admin";

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
  },
  {
    path: "/videos",
    name: "videos",
    component: Videos,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) {
        next();
      } else {
        next("/");
      }
    },
    children: [
      {
        path: "categories",
        name: "videos-categories",
        component: VideosCategories
      },
      {
        path: "category/:id",
        name: "videos-category",
        component: VideosCategory
      },
      {
        path: "add",
        name: "video-add",
        component: VideoAdd
      }
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
