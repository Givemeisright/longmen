<!--<svg>
        <use xlink:href="#money"/>
      </svg> -->
<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels" />
      标签
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
// import "@/assets/icons/labels.svg";
// import "@/assets/icons/money.svg";
// import "@/assets/icons/statics.svg";

export default {
  components: { Icon },
  name: "Nav",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  background: #ffffff;
  > .item {
    color: rgb(194, 189, 189);
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>
