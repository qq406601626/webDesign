<template>
  <aside-module-wrap>
    <aside-module
      v-for="(module, index) in asideModuleList"
      :key="index"
      :module="module"
      :active="currentSelectModule === module"
      @click="currentSelectModule = module"
    >
    </aside-module>
  </aside-module-wrap>
  <el-button @click="show = !show">change</el-button>
  <collapse style="height: 100%; position: absolute; left: 100%; top: 0;z-index:2;">
    <theme v-if="show"></theme>
  </collapse>
</template>

<script>
import { defineComponent, ref } from "vue";
import Collapse from "@/components/collapse.vue";
import Theme from "./asideComponents/theme.vue";
import BackgroundImg from "./asideComponents/backgroundImg.vue";
import { AsideClass } from "@/scripts";
import AsideModuleWrap from "../commonComponents/asideModuleWrap.vue";
import AsideModule from "../commonComponents/asideModule.vue";

export default defineComponent({
  components: {
    Collapse,
    Theme,
    BackgroundImg,
    AsideModuleWrap,
    AsideModule,
  },
  setup() {
    const asideModuleList = ref([
      new AsideClass("主题", "platform-eleme"),
      new AsideClass("界面元素", "user-solid"),
      new AsideClass("背景图片", "star-on"),
    ]);
    const currentSelectModule = ref(null);
    const show = ref(false);
    return {
      asideModuleList,
      currentSelectModule,
      show,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped></style>