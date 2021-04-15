<template>
  <aside-module-wrap>
    <aside-module
        v-for="(module, index) in asideModuleList"
        :key="index"
        :module="module"
        :active="currentSelectModule.asideModule === module"
        @click="currentSelectModule.asideModule = module"
    >
    </aside-module>
  </aside-module-wrap>
  <el-button @click="print">change</el-button>
  <collapse>
    <div
        v-if="currentSelectModule.asideModule.component"
        class="aside-content-wrap"
    >
      <component :is="currentSelectModule.asideModule.component" class="aside-content-component"></component>
    </div>
  </collapse>
</template>

<script>
import {defineComponent, reactive, markRaw} from "vue";
import Collapse from "@/components/collapse.vue";
import Theme from "./asideComponents/theme.vue";
import Elements from "./asideComponents/elements.vue";
import BackgroundImg from "./asideComponents/backgroundImg.vue";
import {AsideClass} from "@/scripts";
import AsideModuleWrap from "../commonComponents/asideModuleWrap.vue";
import AsideModule from "../commonComponents/asideModule.vue";

export default defineComponent({
  components: {
    Collapse,
    Theme,
    Elements,
    BackgroundImg,
    AsideModuleWrap,
    AsideModule,
  },
  setup() {
    const asideModuleList = [
      new AsideClass("主题", "platform-eleme", markRaw(Theme)),
      new AsideClass("界面元素", "user-solid", markRaw(Elements)),
      new AsideClass("背景图片", "star-on", markRaw(BackgroundImg)),
    ];
    const originSelectModule = new AsideClass("", "", null);
    let currentSelectModule = reactive({asideModule: originSelectModule});
    return {
      asideModuleList,
      originSelectModule,
      currentSelectModule,
    };
  },
  methods: {
    print() {
      this.currentSelectModule.asideModule = this.originSelectModule;
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
  z-index: 2;
  background: red;

  .aside-content-component {
    width: 340px;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>