<template>
  <button class="button" @click="$emit('click',$event)">
    <slot />
  </button>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component

export default class Button extends Vue{

}
</script>

<style lang="scss" scoped>
.button {
  background: #f3ab82;
  color: #fffefd;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 8px;
  }
}
</style>
