<template>
  <!-- todo 修改key为id -->
  <template v-for="(childModule, index) in parentModule.children" :key="index">
    <component
      :is="childModule.componentName"
      :module-data="childModule"
      v-domHover:[{afterHoverClick:curryingHoverClick(childModule)}]="
        'broadcastSetting'
      "
    >
    </component>
  </template>
</template>

<script>
import { defineComponent } from "vue";
import swiper from "./swiper/index.vue";
import broadcast from "./broadcast/index.vue";
import { mainState } from "../state.js";

export default defineComponent({
  components: { swiper,broadcast },
  props: {
    parentModule: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },

  methods: {
    afterHoverDelete() {
      this.settingComponentName = "";
    },
    curryingHoverClick(childModule) {
      return (settingComponentName) => {
        this.afterHoverClick(settingComponentName, childModule);
      };
    },
    afterHoverClick(settingComponentName, childModule) {
      mainState.currentSelectModule.value = childModule;
      mainState.currentSettingComponentName.value = settingComponentName;
    },
    afterHoverBlur() {
      this.settingComponentName = "";
    },
  },
});
</script>

<style lang="scss" scoped>
</style>