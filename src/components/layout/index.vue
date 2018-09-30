<template>
  <div class="warpper">
    <Header></Header>
    <div>
      <Aside :style="{display: isFullScreen ? 'none' : ''}"></Aside>
      <Container :style="{left: isFullScreen ? '0' : ''}">
        <slot></slot>
      </Container>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Aside from "@/components/layout/Aside.vue";
import Container from "@/components/layout/Container.vue";
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
  // watch: {
  //   "$route.fullPath": {
  //     handler() {
  //       console.log(this.$route);
  //       if (
  //         this.$route.fullPath === "/" ||
  //         (this.$route.meta && this.$route.meta.isFull)
  //       ) {
  //         this.isFull = true;
  //       } else {
  //         this.isFull = false;
  //       }
  //     },
  //     immediate: true
  //   }
  // }
};
</script>

<style lang="scss">
</style>
