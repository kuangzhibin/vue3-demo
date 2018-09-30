<template>
  <div class="home">
    <h1>good</h1>
    <el-button @click="clickHandle">sdds</el-button>
    <PageLink></PageLink>
  </div>
</template>

<script>
import { requestCNode } from "@api/app";
export default {
  name: "home",
  data() {
    return {
      api: requestCNode
    };
  },
  methods: {
    clickHandle() {
      console.log(11);

      this.api().then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>
