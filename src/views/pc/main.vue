<template>
  <div class="pc-main-container">
    <el-button @click="change">change</el-button>
    <collapse
      
      class="aside-content-wrap"
     
    >
      <div class="aside-content-component"></div>
    </collapse>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Collapse from "@/components/collapse.vue";
export default defineComponent({
  components: {
    Collapse,
  },
  setup() {
    const show = ref(false);
    return {
      show,
    };
  },
  methods: {
    change() {
      this.show = !this.show;
    },
  },
});
</script>

<style lang="scss" scoped>
.pc-main-container {
  position: relative;
  .aside-content-wrap {
    height: 100%;
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: 1px;
    z-index: 2;
    background: rgb(62, 63, 65);

    .aside-content-component {
      width: 440px;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>