import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import StudentsShow from "../views/StudentsShow.vue";
import CapstonesEdit from "../views/CapstonesEdit.vue";
import CapstonesNew from "../views/CapstonesNew.vue";
import StudentsEdit from "../views/StudentsEdit.vue";
import CapstonesShow from "../views/CapstonesShow.vue";
import ExperiencesNew from "../views/ExperiencesNew.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";
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
    path: "/students/:id",
    name: "students-show",
    component: StudentsShow,
  },
  {
    path: "/educations/:id/edit",
    name: "educations-edit",
    component: EducationsEdit
  },
  {
    path: "/educations/new",
    name: "educations-new",
    component: EducationsNew,
  },
  {
    path: "/students/:id/edit",
    name: "students-edit",
    component: StudentsEdit,
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
    name: "capstones-show",
    component: CapstonesShow
  },
  {
    path: "/capstones/:id/edit",
    name: "capstones-edit",
    component: CapstonesEdit
  },
  {
    path: "/capstones/new",
    name: "capstones-new",
    component: CapstonesNew
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
