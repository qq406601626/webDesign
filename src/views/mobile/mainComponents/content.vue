<template>
  <template v-for="childModule in  parentModule.children">
    <component :is="childModule.componentName"
               :module-data="childModule"
               v-domHover:[{afterHoverClick:curryingHoverClick(childModule)}]="'swiperSetting'">
    </component>
  </template>
</template>

<script>
import {defineComponent} from "vue";
import swiper from './swiper/index.vue'
import {mainState} from '../state.js'

export default defineComponent({
  components: {swiper},
  props: {
    parentModule: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },

  methods: {
    afterHoverDelete() {
      this.settingComponentName = "";
    },
    curryingHoverClick(childModule) {
      return (settingComponentName) => {
        this.afterHoverClick(settingComponentName, childModule)
      }
    },
    afterHoverClick(settingComponentName, childModule) {
      mainState.currentSelectModule.value = childModule
      mainState.currentSettingComponentName.value = settingComponentName
    },
    afterHoverBlur() {
      this.settingComponentName = "";
    },
  },
});
</script>

<style lang="scss" scoped>
</style>