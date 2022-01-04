<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import charts, { EChartOption, ECharts } from "echarts";

@Component
export default class Chart extends Vue {
  @Prop() options?: EChartOption;
  chart?: ECharts;
  mounted() {
    if (this.options === undefined) {
      return console.error("options 为空");
    }
    this.chart = charts.init(this.$refs.wrapper as HTMLDivElement);
    this.chart.setOption(this.options);
  }
  @Watch("options")
  onOptionsChange(val: EChartOption) {
    this.chart!.setOption(val);
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 400px;
}
</style>
