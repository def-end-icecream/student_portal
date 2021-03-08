import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import StudentsShow from "../views/StudentsShow.vue";
import CapstonesShow from "../views/capstone/CapstonesShow.vue";
import ExperiencesNew from "../views/ExperiencesNew.vue";
import EducationsNew from "../views/EducationsNew.vue";
import EducationsEdit from "../views/EducationsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students/1",
    name: "students-show",
    component: StudentsShow,
  },
  {
    path: "/educations/:id/edit",
    name: "educations-edit",
    component: EducationsEdit
  },
  {
    path: "educations/new",
    name: "educations-new",
    component: EducationsNew,
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
    path: "/capstones/1",
    name: "capstone-show",
    component: CapstonesShow
  },
  {
    path: "/experiences/new",
    name: "experiences-new",
    component: ExperiencesNew,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
