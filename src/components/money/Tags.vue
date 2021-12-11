<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import store from "@/store/indexStore";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  tagList = store.fetchTags();
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
  create() {
    const name = window.prompt("请输入标签名");
    if (!name) {
      return window.alert("标签名不能为空");
    }
    store.createTag(name);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    > li {
      $bg: #d9d9d9;
      $height: 25px;
      background: $bg;
      height: $height;
      line-height: $height;
      border-radius: $height/2;
      padding: 0 15px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($bg, 15%);
        color: white;
      }
      @media (min-width: 400px) {
        &:hover {
          background: darken($bg, 15%);
          color: white;
          cursor: pointer;
        }
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 4px;
      &:hover {
        color: #888;
        cursor: pointer;
      }
    }
  }
}
</style>
