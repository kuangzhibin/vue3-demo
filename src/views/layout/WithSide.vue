<template>
  <div class="warpper">
    <Header></Header>
    <div>
      <Aside></Aside>
      <Container>
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view></router-view>
        </transition>
      </Container>
    </div>
  </div>
</template>

<script>
import { Header, Aside, Container } from "./components/";
export default {
  components: {
    Header,
    Aside,
    Container
  },
  data() {
    return {};
  },
  computed: {
    isFullScreen() {
      return this.$route.meta.isFullScreen;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
