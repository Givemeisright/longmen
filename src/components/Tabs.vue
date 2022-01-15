<template>
  <ul
    class="tabs"
    :class="{
      [classPrefix + '-tabs']: classPrefix,
    }"
  >
    <li
      v-for="item in dataSource"
      :key="item.value"
      class="tabs-item"
      :class="{
        selected: item.value === value,
        [classPrefix + '-tabs-item']: classPrefix,
      }"
      @click="select(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
type DataSourceItem = { text: string; value: string };
@Component
export default class Tabs extends Vue {
  //强制初始化，必须包含初始值
  @Prop({ required: true, type: Array }) dataSource!: {
    text: string;
    value: string;
  }[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  // @Prop({ type: String, default: "64px" })
  // height!:number
  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  color: #f3ab82;
  background: #ffffff;
  margin: 0 3px;
  display: flex;
  text-align: center;
  font-size: 24px;
  border: 1px #f3ab82 solid;
  border-radius: 8px;
  &-item {
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-weight: bold;
    &.selected {
      background: #f3ab82;
      color: #fffefd;
      border-radius: 6px;
      &::before {
        content: "I";
        font-size: 35px;
        position: relative;
        bottom: 0;
        left: -10px;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
