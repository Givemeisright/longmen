<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons clearfix">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="backSpace">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clearPad">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="enter" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  @Prop() readonly value!: number;
  output = this.value.toString();
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inputContent(e: MouseEvent) {
    const button = e.target as HTMLButtonElement;
    //末尾 ！去除null和undefined
    const input = button.textContent!;
    if (this.output.length >= 16) {
      return;
    }
    if (this.output === "0") {
      if (parseInt(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
    // this.$emit('update:value',this.output); 可选，每次输入更新数值
  }
  clearPad() {
    this.output = "0";
    this.$emit("update:value", this.output);
  }
  backSpace() {
    const n = this.output.slice(0, -1);
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = n;
    }
  }
  enter() {
    //最后更新数值
    this.$emit("update:value", this.output);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      $bg: #f2f2f2;
      $percent: 4%;
      &:nth-child(1) {
        background: $bg;
        &:hover {
          background: darken($color: $bg, $amount: 2 * $percent);
          cursor: pointer;
        }
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($color: $bg, $amount: $percent);
        &:hover {
          background: darken($color: $bg, $amount: 3 * $percent);
          cursor: pointer;
        }
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($color: $bg, $amount: 2 * $percent);
        &:hover {
          background: darken($color: $bg, $amount: 4 * $percent);
          cursor: pointer;
        }
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($color: $bg, $amount: 3 * $percent);
        &:hover {
          background: darken($color: $bg, $amount: 5 * $percent);
          cursor: pointer;
        }
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($color: $bg, $amount: 4 * $percent);
        &:hover {
          background: darken($color: $bg, $amount: 6 * $percent);
          cursor: pointer;
        }
      }
      &:nth-child(14) {
        background: darken($color: $bg, $amount: 5 * $percent);
        &:hover {
          background: darken($color: $bg, $amount: 7 * $percent);
          cursor: pointer;
        }
      }
      &:nth-child(12) {
        background: darken($color: $bg, $amount: 6 * $percent);
        &:hover {
          background: darken($color: $bg, $amount: 8 * $percent);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
