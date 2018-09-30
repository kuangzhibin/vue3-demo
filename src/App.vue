<template>
  <div id="app">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/layout/";

export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
