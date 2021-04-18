<template>
  <div :class="{ 'aside-module': true, active }">
    <div :class="[`el-icon-${module.iconName}`]"></div>
    <div class="label">{{ module.label }}</div>
    <slot></slot>
  </div>
</template>

<script>
import { AsideClass } from "@/scripts";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    module: {
      type: AsideClass,
      request: true,
      default() {
        return new AsideClass();
      },
    },
    active: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.aside-module {
  text-align: center;
  cursor: pointer;
  transition: background-color 300ms linear;
  padding: 10px 0;
  &:hover,
  &.active {
    background: #409eff;
  }
}
</style>