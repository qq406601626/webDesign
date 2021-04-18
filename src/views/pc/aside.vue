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
  <collapse
      :visible="!!currentSelectModule.asideModule.component"
      class="aside-content-wrap"
      @collapse="currentSelectModule.asideModule=originSelectModule"
  >
    <component
        :is="currentSelectModule.asideModule.component"
        class="aside-content-component"
    ></component>
  </collapse>
</template>

<script>
import {defineComponent, reactive, markRaw, h} from "vue";
import Collapse from "@/components/collapse.vue";
import Theme from "./asideComponents/theme.vue";
import Elements from "./asideComponents/elements.vue";
import BackgroundImg from "./asideComponents/backgroundImg.vue";
import {AsideClass} from "@/scripts";
import AsideModule from "../commonComponents/asideModule.vue";

export default defineComponent({
  components: {
    Collapse,
    Theme,
    Elements,
    BackgroundImg,
    AsideModule,
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
      new AsideClass("界面元素", "user-solid", markRaw(Elements)),
      new AsideClass("背景图片", "star-on", markRaw(BackgroundImg)),
    ]);
    const originSelectModule = new AsideClass("", "", null);
    let currentSelectModule = reactive({asideModule: originSelectModule});
    return {
      spacer,
      asideModuleList,
      originSelectModule,
      currentSelectModule,
    };
  },
  methods: {
    print() {
      console.log(this.currentSelectModule)
    },
  },
});
</script>

<style lang="scss" scoped>
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
</style>