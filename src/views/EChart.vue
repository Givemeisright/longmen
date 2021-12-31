<template>
  <Layout>
    <Title title="图表" />
    <div class="chart-wrapper" ref="chartWrapper">
      <Chart class="chart" :options="chartOptions" />
    </div>
    <div class="backButton">
      <Button @click="goBack">返回</Button>
    </div>
  </Layout>
</template>
<style scoped lang="scss">
.backButton {
  margin-top: 50px;
  text-align: center;
}
.chart {
  margin-top: 40px;
  width: 430%;
  &-wrapper {
    overflow: auto;
    &::-webkit-scrollbar {
      @media (max-width: 400px) {
        display: none;
      }
    }
  }
}
</style>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Button from "@/components/money/Button.vue";
import Chart from "@/components/Chart.vue";

@Component({
  components: {
    Button,
    Chart,
  },
})
export default class ECharts extends Vue {
  mounted() {
    const div = this.$refs.chartWrapper as HTMLDivElement;
    div.scrollLeft = div.scrollWidth;
  }
  get chartOptions() {
    return {
      grid: {
        left: 0,
        right: 0,
      },

      xAxis: {
        type: "category",
        axisLine: {
          //坐标轴颜色
          lineStyle: {
            color: "rgba(0, 0, 0, 1)",
          },
        },
        //坐标轴对齐标记点
        axisTick: { alignWithLabel: true },
        data: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
        ],
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: [
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320,
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320,
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320,
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320,
            144,
            25,
          ],
          type: "line",
          symbol: "circle",
          symbolSize: 14,
          // 折线拐点标志的样式
          itemStyle: {
            color: "rgba(54, 84, 161, 1)",
          },
          // 线条样式
          lineStyle: {
            width: 3,
            color: "rgba(181, 56, 56, 1)",
          },
        },
      ],
      tooltip: {
        show: true,
        alwaysShowContent: true,
        triggerOn: "click",
        formatter: "{b}: {c}",
        position: "top",
        axisPointer: {
          type: "line",
        },
      },
    };
  }

  goBack() {
    this.$router.go(-1);
  }
}
</script>
