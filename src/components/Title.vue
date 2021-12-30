<!--<svg>
        <use xlink:href="#money"/>
      </svg> -->
<template>
  <nav>
    <div class="item">
      <Icon name="dragon" />
    </div>
    <div class="title-wrapper">
      <h3>
        {{title}}
      </h3>
    </div>
    <div class="item">
      <Icon/>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Icon from "./Icon.vue";
@Component({
  components:{Icon}
})
export default class Title extends Vue {
  @Prop(String) title?: string;
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item {
    color: black;
    padding: 3px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 30px;
      height: 30px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
.title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
