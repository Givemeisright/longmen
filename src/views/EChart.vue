<template>
  <Layout>
    <Title title="图表" />
    <div id="main" style="width: 400px;height:400px;"></div>
    <div class="backButton">
      <Button @click="goBack">返回</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import * as echarts from "echarts";
import Button from "@/components/money/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class ECharts extends Vue {
  mounted() {
    var myChart = echarts.init(
      document.getElementById("main") as HTMLDivElement
    );
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }

   goBack() {
    this.$router.go(-1);
  }
}
</script>

<style scoped>
#main {
  margin: 40px auto;
}
.backButton {
  margin: 0 auto;
  text-align: center;
}
</style>
