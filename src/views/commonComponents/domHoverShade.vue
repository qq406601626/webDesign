<template>
  <div class="hover-shade-container">name:{{ name }}</div>
</template>

<script>
import { defineComponent } from "vue";
export default {
  data() {
    return {
      name: "zhangdan",
    };
  },
};
</script>

<style lang="scss" scoped>
.hover-shade-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 2000;
  border: 1px dashed #ffffff;
}
</style>