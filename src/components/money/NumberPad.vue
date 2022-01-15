<template>
  <div class="numberPad">
    <div class="output">{{ output }} 元</div>
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
  @Prop(Number) readonly value!: number;
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
    this.$emit("update:value", parseInt(this.output));
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
    const number = parseFloat(this.output);
    this.$emit("update:value", number);
    this.$emit("submit", number);
    this.output = "0";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  margin-top: -3px;
  .output {
    @extend %clearFix;
    background: #ffffff;
    font-size: 36px;
    // font-family: Consolas, monospace;
    padding: 3px 16px 0 16px;
    text-align: right;
    &::after {
        content: "";
        position: relative;
        bottom: 5px;
        width: 100%;
        height: 1px;
        background: #898989;
      }
  }
  .buttons {
    @extend %clearFix;
    font-weight: bold;
    margin: 3px;
    > button {
      color: #f3ab82;
      width: 24%;
      height: 64px;
      margin: 0.5%;
      float: left;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #f3ab82;
      &.ok {
        color: #fffefd;
        height: 133px;
        float: right;
      }
      &.zero {
        width: 49%;
      }
      $bg: #f2f2f2;
      $percent: 4%;
      &:nth-child(1) {
        &:hover {
          cursor: pointer;
        }
      }
      &:nth-child(2),
      &:nth-child(5) {
        &:hover {
          cursor: pointer;
        }
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        &:hover {
          cursor: pointer;
        }
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        &:hover {
          cursor: pointer;
        }
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        &:hover {
          cursor: pointer;
        }
      }
      &:nth-child(14) {
        &:hover {
          cursor: pointer;
        }
      }
      &:nth-child(12) {
        background: #f3ab82;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
