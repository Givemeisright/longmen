<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import charts, { EChartOption } from "echarts";

@Component
export default class Chart extends Vue {
  @Prop() options?: EChartOption;
  mounted() {
      if(this.options === undefined){
        return console.error('options 为空')
      }
      const chart = charts.init(this.$refs.wrapper as HTMLDivElement)
      chart.setOption(this.options)
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 400px;
}
</style>
