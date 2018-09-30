<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 250px;
  right: 0;
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
}
</style>
