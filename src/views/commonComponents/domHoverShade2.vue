<template>
  <div class="hover-shade-container">name:{{ name }}</div>
  <div class="el-icon-error"></div>
</template>

<script>
import { defineComponent } from "vue";
export default {
  props:['name'],
  // setup(props) {
  //   console.log("aaaaaaaaaa", this.aaaaaaaaaa);
  // },
  data() {
    return {};
  },
  methods:{
    qqqqqqqqq(){}
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.hover-shade-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: -1px;
  left: -1px;
  z-index: 2000;
  border: 1px dashed #ffffff;
  z-index: 1;
  cursor: pointer;
}
.el-icon-error {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate3d(50%, -50%, 0);
  font-size: 26px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  z-index: 2;
}
</style>