<template>
  <div class="hover-shade-container">
    <div v-if="showShade" class="shade" style="color: red">{{ name }}</div>
    <div v-if="showBoder" class="border"></div>
    <div v-if="showDeleteButton" class="delete-button el-icon-error"></div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
const createHoverShadeProps = () => {
  const props = reactive({
    showShade: true,
    showBoder: true,
    showDeleteButton: true,
    name: "zhangsan",
  });
  return props;
};
console.log('zzzzzzzzzzzzzzzzzz')
const props = reactive({
  showShade: true,
  showBoder: true,
  showDeleteButton: true,
  name: "zhangsan",
});
const ctx = defineComponent({
  setup() {
    console.log('111111111111111')
    return props;
  },
});

export { ctx as default, props };
</script>

<style lang="scss" scoped>
.hover-shade-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2000;
  cursor: pointer;
  .shade {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
  }
  .border {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1px;
    left: -1px;
    border: 1px dashed #fff;
  }
  .delete-button {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate3d(50%, -50%, 0);
    font-size: 26px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
}
</style>