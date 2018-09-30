import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("components/layout/FullScreen.vue"),
      children: [
        {
          path: "/",
          name: "welcome",
          component: () => import("views/Welcome.vue")
        }
      ]
    },
    {
      path: "/home",
      component: () => import("components/layout/"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("views/Home.vue")
        }
      ]
    },
    {
      path: "/about",
      component: () => import("components/layout/"),
      children: [
        {
          path: "/",
          name: "about",
          component: () => import("views/About.vue")
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: () => import("components/layout/FullScreen.vue"),
      children: [
        {
          path: "/",
          name: "404",
          component: () => import("views/404.vue")
        }
      ]
    }
  ]
});
