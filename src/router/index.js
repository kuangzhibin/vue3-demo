import Vue from "vue";
import Router from "vue-router";

const FullScreen = () => import("@/views/layout/FullScreen.vue");
const Layout = () => import("@/views/layout/WithSide.vue");

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
