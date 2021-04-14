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
  <collapse>
    <component class="aside-collapse" :is="currentSelectModule.component"></component>
  </collapse>
</template>

<script>
import {defineComponent, ref, markRaw} from "vue";
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
    const _Theme = markRaw(Theme)
    const _Elements = markRaw(Elements)
    const _BackgroundImg = markRaw(BackgroundImg)
    const asideModuleList = ref([
      new AsideClass("主题", "platform-eleme", _Theme),
      new AsideClass("界面元素", "user-solid", _Elements),
      new AsideClass("背景图片", "star-on", _BackgroundImg),
    ]);
    const currentSelectModule = ref(new AsideClass("", "", null));
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

<style lang="scss" scoped>
.aside-collapse {
  //width: 340px;
  height: 100%;
  position: absolute;
  left: 100%;
  top: 0;
  z-index: 2;
  padding: 0 20px;
  box-sizing: border-box;
  //flex-wrap: nowrap;
  //flex-shrink: 0;
  //flex-grow: 1;
  background: red;
}

</style>