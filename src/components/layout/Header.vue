<template>
  <div class="header">
    <div class="logo">
      <img :src="logo" alt="报表系统">
    </div>
    <ul class="nav">
      <!-- <li v-for="(item, index) in navList" v-link="{path: '/'}" :key="index">
        {{item.name}}
      </li> -->
      <router-link tag="li" active-class="active" v-for="(item, index) in navList" :key="index" :to="item.path">{{item.name}}</router-link>
    </ul>
    <div class="info">
      <ul>
        <li class="message"></li>
        <li class="userName">bosstest</li>
        <li class="exit" @click="$router.push('/')">退出登陆</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("assets/images/report_logo.png"),
      navList: [
        { path: "/home", name: "行政" },
        { path: "/about", name: "市场" },
        { path: "/404", name: "销售" }
        // { path: "/", name: "客服" },
        // { path: "/", name: "教学" },
        // { path: "/", name: "管理" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 70px;
  border-bottom: 5px solid #7b008d;
  background-color: #333;
  color: #94a0b6;
  .logo {
    float: left;
    width: 250px;
    text-align: center;
    padding: 18px;
  }
  .nav {
    float: left;
    li {
      float: left;
      list-style: none;
      color: #94a0b6;
      display: block;
      width: 120px;
      height: 65px;
      text-align: center;
      line-height: 65px;
      cursor: pointer;
      &.active {
        color: #fff;
        background-color: #7b008d;
      }
      &:hover {
        color: #fff;
      }
    }
  }
  .info {
    float: right;
    li {
      float: left;
      height: 65px;
      padding: 0 10px;
      line-height: 65px;
      cursor: pointer;
      &:hover {
        background: #ddd;
      }
    }
  }
}
</style>
