<template>
  <div class="hello">
    <el-button @click="$router.push('/')">go to page Welcome</el-button>
    <el-button @click="$router.push('/home')">go to page Home</el-button>
    <el-button @click="$router.push('/about')">go to page About</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
