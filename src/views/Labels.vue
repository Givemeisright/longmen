
<template>
  <Layout>
    <Title title="标签"/>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="newTag-wrapper">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Button from "@/components/money/Button.vue";
import { mixins } from "vue-class-component";
import { tagHelper } from "@/mixins/tagHelper";

@Component({
  components: { Button },
})
export default class Labels extends mixins(tagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
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
  > .tag {
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
  }
}
.newTag-wrapper {
  // margin: 10px;
  // background: #767676;
  // color: white;
  // border-radius: 4px;
  // border: 1px solid red;
  // height: 40px;
  // padding: 0 16px;
  // &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 8px;
  // }
}
</style>
