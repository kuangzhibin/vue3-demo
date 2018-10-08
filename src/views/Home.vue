<template>
  <div class="home">
    <h1>good</h1>
    <el-button @click="clickHandle">sdds</el-button>
    <PageLink></PageLink>
    <!-- <div id="echartContainer" style="width:500px; height:500px"></div> -->
  </div>
</template>

<script>
import echarts from "echarts";
import { requestCNode } from "@api/app";
export default {
  name: "home",
  data() {
    return {
      api: requestCNode,
      charts: "",
      opinion: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      opinionData: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ]
    };
  },
  mounted() {
    this.$nextTick(function() {
      // this.drawPie("echartContainer");
    });
  },
  methods: {
    clickHandle() {
      this.api().then(res => {
        console.log(res.data);
      });
    },
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: this.opinion
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "blod"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.opinionData
          }
        ]
      });
    }
  }
};
</script>
