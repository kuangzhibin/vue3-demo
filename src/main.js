import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import "normalize.css";
import "./plugins/element.js";
import PageLink from "@/components/PageLink";

Vue.config.productionTip = false;

Vue.component("PageLink", PageLink);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
