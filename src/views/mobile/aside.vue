<template>
  <el-space
    direction="vertical"
    :size="10"
    :spacer="spacer"
    class="pc-aside-container"
    alignment="stretch"
    style="width: 100%"
  >
    <aside-module
      v-for="(asideModule, index) in asideModuleList"
      :key="index"
      :module="asideModule"
      :active="currentSelectModule.asideModule === asideModule"
      @click="currentSelectModule.asideModule = asideModule"
    >
    </aside-module>
  </el-space>
  <el-button @click="print">change</el-button>

</template>

<script>
import { defineComponent, reactive, markRaw, h } from "vue";
import Collapse from "@/components/collapse.vue";
import { AsideClass } from "@/scripts";
import AsideModule from "../commonComponents/asideModule.vue";
import Theme from "./asideComponents/theme.vue";
import Assembly from "./asideComponents/assembly.vue";
import {originSelectModule,currentSelectModule} from './state'
export default defineComponent({
  components: {
    Collapse,
    AsideModule,
    Theme,
    Assembly
  },
  setup() {
    const spacer = h("div", {
      style: {
        width: "30px",
        height: "1px",
        background: "hsla(0, 0%, 100%, .45)",
        marginLeft: "33px",
      },
    });
    const asideModuleList = reactive([
      new AsideClass("主题", "platform-eleme", markRaw(Theme)),
      new AsideClass("界面元素", "user-solid", markRaw(Assembly)),
    ]);
    return {
      spacer,
      asideModuleList,
      originSelectModule,
      currentSelectModule,
    };
  },
  methods: {
    print() {
      console.log(this.currentSelectModule);
    },
  },
});
</script>

<style lang="scss" scoped>
.aside-content-wrap {
  height: 100%;
  //position: absolute;
  //left: 100%;
  //top: 0;
  //margin-left: 1px;
  //z-index: 2;
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
    left: 100%;
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