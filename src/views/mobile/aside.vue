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
      :active="asideState.currentSelectModule.asideModule === asideModule"
      @click="asideState.currentSelectModule.asideModule = asideModule"
    >
    </aside-module>
  </el-space>
</template>

<script>
import { defineComponent, reactive, markRaw, h } from "vue";
import { AsideClass } from "@/scripts";
import AsideModule from "../commonComponents/asideModule.vue";
import Theme from "./asideComponents/theme.vue";
import Assembly from "./asideComponents/assembly.vue";
import {asideState} from './state'
export default defineComponent({
  components: {
    AsideModule,
    Theme,
    Assembly,
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
      asideState
    };
  },
  methods: {
  },
});
</script>

<style lang="scss" scoped>

</style>