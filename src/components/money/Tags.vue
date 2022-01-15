<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
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
import Vue from "vue";
import tagHelper from "@/mixins/tagHelper";
import { mixins } from "vue-class-component";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends mixins(tagHelper) {
  @Prop() readonly tag!: Tag[];
  selectedTags: string[] = [];
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit("fetchTags");
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
$bg: #f3ab82;
$ubg: #bbb;
$height: 30px;
.tags {
  background: #fff;
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
      border: solid 1px $ubg;
      color: $ubg;
      height: $height;
      line-height: $height;
      border-radius: $height;
      padding: 0 15px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        color: $bg;
        border: solid 1px $bg;
      }
      @media (min-width: 500px) {
        &:hover {
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
        color: $bg;
        cursor: pointer;
      }
    }
  }
}
</style>
