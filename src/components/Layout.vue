<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang='ts'>
export default {
  name: "Layout",
  props:['classPrefix']
};
</script>

<style lang="scss" scoped>
 .layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .content {
    overflow: auto;
    flex-grow: 1;
  }
//   @media  (max-height:850px) {
//  .layout-wrapper{
//   min-height: 93vh;
//   }
// }
</style>