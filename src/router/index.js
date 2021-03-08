import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import CapstonesShow from "../views/capstone/CapstonesShow.vue"
import ExperiencesNew from "../views/ExperiencesNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
<<<<<<< HEAD
    path: "/capstones/1",
    name: "capstone-show",
    component: CapstonesShow
  }
=======
    path: "/experiences/new",
    name: "experiences-new",
    component: ExperiencesNew,
  },
>>>>>>> be652eb15674ed7845e6dfa74220dde3f1cb7672
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
