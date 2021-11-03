<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons clearfix">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Notes",
};
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
