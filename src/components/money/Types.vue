<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Types",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      type: "-",
    };
  },
  props: [""],
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    selectType(type) {
      if (type !== "-" && type != "+") {
        throw new Error("tpye is unknown");
      }
      this.type = type;
    },
  },
};
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
    &:hover {
      background: #999;
      cursor: pointer;
    }
  }
}
</style>
