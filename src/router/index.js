import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ExperiencesNew from "../views/ExperiencesNew.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";

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
    path: "/experiences/new",
    name: "experiences-new",
    component: ExperiencesNew,
  },
  {
    path: "/experiences/:id/edit",
    name: "experiences-edit",
    component: ExperiencesEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
