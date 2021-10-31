<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  line-height: 1.5;
  font-family: $font-hei;
  color: #333;
}
a {
  text-decoration: none;
  color: inherit;
}

</style>
