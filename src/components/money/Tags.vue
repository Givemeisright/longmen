<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tags",
};
</script>

<style lang="scss" scoped>
.tags {
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
      $height: 25px;
      background: #d9d9d9;
      height: $height;
      line-height: $height;
      border-radius: $height/2;
      padding: 0 15px;
      margin-right: 12px;
      margin-top: 4px;
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
