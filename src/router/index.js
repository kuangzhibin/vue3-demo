import Vue from "vue";
import Router from "vue-router";

const FullScreen = () => import("@/components/layout/FullScreen.vue");
const Layout = () => import("@/components/layout/");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: FullScreen,
      children: [
        {
          path: "/",
          name: "welcome",
          component: () => import("@/views/Welcome.vue")
        }
      ]
    },
    {
      path: "/home",
      component: Layout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/Home.vue")
        }
      ]
    },
    {
      path: "/about",
      component: Layout,
      children: [
        {
          path: "/",
          name: "about",
          component: () => import("@/views/About.vue")
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: FullScreen,
      children: [
        {
          path: "/",
          name: "404",
          component: () => import("@/views/404.vue")
        }
      ]
    }
  ]
});
