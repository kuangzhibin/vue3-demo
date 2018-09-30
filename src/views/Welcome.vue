<template>
  <div class="welcome">
    <PageLink></PageLink>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$store.state.isFull);
  }
};
</script>

<style lang="scss">
.welcome {
  width: 100%;
  height: 100%;
  background: #fff url("../assets/images/Reporting.jpg") no-repeat center;
  background-size: cover;
}
</style>
