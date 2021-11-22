import Icon from '@/components/Icon.vue'; import Vue from 'vue';

<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="newTag-wrapper">
      <button class="newTag" @click="creatTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
tagListModel.fetch();
const tags = tagListModel.data;
@Component
export default class Labels extends Vue {
  tags = tags;
  creatTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "重复") {
        window.alert("标签重复");
      } else if (message === "成功") {
        window.alert("添加成功");   
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 0 10px;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 8px;
    svg {
      width: 18px;
      height: 18px;
      color: #e66;
    }
    > span {
    }
    > div {
    }
  }
}
.newTag {
  margin: 10px;
  background: #767676;
  color: white;
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
