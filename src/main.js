import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "../i18n";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
// for Default LayOut Render Header For All Pages
import DefaultLayout from "./Layouts/default.vue";
import CustomeLayout from "./Layouts/customeLayout.vue";
// ligbox-for image
import VueEasyLightbox from "vue-easy-lightbox";
import "../public/styles/main.css";
import Vue3Autocounter from "vue3-autocounter";
import axios from "axios";
let lang = localStorage.getItem("lang");
if (lang === "ar") {
  axios.defaults.baseURL = " http://localhost:3000";
} else {
  axios.defaults.baseURL = "  http://localhost:2000";
}

createApp(App)
  .use(VueEasyLightbox)
  .use(store)
  .use(router)
  .use(i18n)
  .component("vue3-autocounter", Vue3Autocounter)
  .component("default-layout", DefaultLayout)
  .component("custome-layout", CustomeLayout)
  .mount("#app");
