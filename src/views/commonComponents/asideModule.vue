<template>
  <div  class="aside-module" style="text-align: center">
    <div :class="[`el-icon-${module.iconName}`]"></div>
    <div class="label">{{ module.label }}</div>
  </div>
</template>

<script>
import {AsideClass} from '@/scripts'
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    module: {
      type: AsideClass,
      request: true,
      default() {
        return new AsideClass()
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
});
</script>

<style lang="scss" scoped>

</style>