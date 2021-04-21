<template>
  <!--
    <el-button @click="changeLoading">changeLoading</el-button>
  <el-button @click="changeCollapse">changeCollapse</el-button>
  <el-button @click="changeHoverDomShowHide">changeHoverDomShowHide</el-button>
  <el-button @click="changeText">changeText</el-button>
  <div style="width: 200px; height: 200px; background: red" v-loading="loading">
    11111111111111111111111
  </div>

  <div
    v-domHover
    class="aaaaaaa"
    style="width: 200px; height: 200px; background: red"
  >
    aaaaaaaaaaaaaaaaa
  </div>
  <div
    v-domHover.noShade
    class="bbbbbbb"
    style="width: 200px; height: 200px; background: red"
  >
    bbbbbbbbbb
  </div>
  <div  v-domHover :id="text" style="width: 200px; height: 200px; background: red">
    <div>text:{{text}}</div>
  </div>
  -->
  <collapse :visible="showCollapse" class="aside-content-wrap">
    <template #default>
      <!-- <component
        :is="currentSelectModule.asideModule.component"
        class="aside-content-component"
      ></component> -->
      <div class="aside-content-component">111111111111111</div>
    </template>
    <template #collapse-button>
      <div class="collapse-button el-icon-d-arrow-right"></div>
    </template>
  </collapse>
</template>

<script>
// import * as a from "vue";
// console.log("----", a);
import { defineComponent, ref, reactive } from "vue";
import Collapse from "@/components/collapse.vue";
export default defineComponent({
  components: {
    Collapse,
  },
  setup() {
    const loading = ref(false);
    const showCollapse = ref(false);
    const hoverDomShow = ref(false);
    const text = ref("aaaaaaaaaaaa");
    return {
      loading,
      showCollapse,
      hoverDomShow,
      text,
    };
  },
  methods: {
    changeCollapse() {
      this.showCollapse = !this.show;
    },
    changeHoverDomShowHide() {
      this.hoverDomShow = !this.hoverDomShow;
    },
    changeText() {
      this.text = "bbbbbbbbbbbbbb";
    },
    changeLoading() {
      this.loading = !this.loading;
    },
  },
  mounted() {},
});
</script>

<style lang="scss" scoped>
.aside-content-wrap {
  height: 100%;
  position: absolute;
  right: 0;
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
  .collapse-button {
    width: 10px;
    height: 100%;
    background: #2a2a2a;
    position: absolute;
    top: 0;
    left: -10px;
    color: #909399;
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      background: #333333;
      color: #a6a9ad;
    }
    &:before {
      transform: translateX(-1px) scale(0.8);
    }
  }
}
</style>