import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Arrticels from "../views/Arrticels_id.vue";
import OnlineTraning from "../views/OnlineTraning.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
import ArticlesId from "../views/Arrticels_id.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/arrticels",
    name: "arrticels",
    component: Arrticels,
  },
  {
    path: "/online-training",
    name: "online-training",
    component: OnlineTraning,
    meta: {
      layout: "custome",
    },
  },
  {
    path: "/about-us",
    name: "aboutus",
    component: AboutUs,
    meta: {
      layout: "custome",
    },
  },
  {
    path: "/Contact-Us",
    name: "Contact-Us",
    component: ContactUs,
    meta: {
      layout: "custome",
    },
  },
  {
    path: "/articles/:id",
    name: "ArticlesId",
    component: ArticlesId,
    meta: {
      layout: "custome",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
});

export default router;
