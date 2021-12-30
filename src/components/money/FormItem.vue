<template>
  <div>
    <label class="notes">
      <div class="name">{{ this.fieldName }}</div>
      <div>
        <template v-if="type == 'date'">
          <input
            :type="type || 'text'"
            :value="getTime(value)"
            @input="onValueChange($event.target.value)"
            :placeholder="placeholder"
          />
        </template>
        <template v-else>
          <input
            :type="type || 'text'"
            :value="value"
            @input="onValueChange($event.target.value)"
            :placeholder="placeholder"
          />
        </template>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import dayjs from "dayjs";
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
//已经有value可以监听value的值来触发事件
@Component
export default class Notes extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  // ! 不需要初始值,required: true 设置必填
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  @Prop() type?: string;
  onValueChange(value: string) {
    this.$emit("update:value", value);
  }
  getTime(isoString: string) {
    return dayjs(isoString).format("YYYY-MM-DD");
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
