<template>
  <Layout>
    <Tabs :data-source="typeList" class-prefix="type" :value.sync="type" />
    <Tabs
      :data-source="intervalList"
      class-prefix="interval"
      :value.sync="interval"
    />
    <div>
      type:{{type}}
      <br />
      interval:{{interval}}
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/money/Types.vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
@Component({
  components: {
    Types,
    Tabs,
  },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
    { text: "按年", value: "year" },
  ];
}
</script>

<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>
