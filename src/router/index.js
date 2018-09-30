import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "welcome",
      component: () => import("views/Welcome.vue"),
      meta: { isFullScreen: true }
    },
    {
      path: "/home",
      name: "home",
      component: () => import("views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("views/About.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import("views/404.vue"),
      meta: { isFull: true }
    }
  ]
});
