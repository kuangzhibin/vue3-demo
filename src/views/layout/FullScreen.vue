<template>
  <div class="warpper">
    <Header></Header>
    <Container :style="{left: '0'}">
      <router-view></router-view>
    </Container>
  </div>
</template>

<script>
import { Header, Container } from "./components/";

export default {
  components: {
    Header,
    Container
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
