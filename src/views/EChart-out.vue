<template>
  <Layout>
    <Title title="图表——支出" />
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
import _ from "lodash";
import dayjs from "dayjs";
import deepClone from "@/lib/clone";

@Component({
  components: {
    Button,
    Chart,
  },
})
export default class ECharts extends Vue {
  type = "-";
  get recordList() {
    // eslint-disable-next-line no-undef
    
    return (this.$store.state as RootState).recordList;
  }
  mounted() {
    const div = this.$refs.chartWrapper as HTMLDivElement;
    div.scrollLeft = div.scrollWidth;
  }
  get groupedList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = deepClone(recordList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) =>
          dayjs(b.createdTime).valueOf() - dayjs(a.createdTime).valueOf()
      );
    if (newList.length === 0) {
      return [] as Result;
    }
    const result: Result = [
      {
        title: dayjs(newList[0].createdTime).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdTime), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdTime).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    result.map((group) => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  }
  get keyValueList() {
    const today = new Date();
    const showDays = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = dayjs(today)
        .subtract(i, "day")
        .format("YYYY-MM-DD");
      const foundDay = _.find(this.groupedList, { title: dateString });
      showDays.push({
        date: dayjs(today)
          .subtract(i, "day")
          .format("MM/DD"),
        value: foundDay ? foundDay.total : "0",
      });
    }
    return showDays.reverse();
  }
  get chartOptions() {
    const keys = this.keyValueList.map((item) => item.date);
    const values = this.keyValueList.map((item) => item.value);
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
        data: keys,
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: values,
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
        formatter: "{c}元",
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
