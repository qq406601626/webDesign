<template>
  <el-row type="flex" align="top">
    <div @click="show=!show">pc aside</div>
    <collapse>
      <component v-if="show" is="theme"></component>
    </collapse>
  </el-row>
</template>

<script>
import {defineComponent} from 'vue'
import Collapse from '@/components/collapse.vue'
import Theme from './asideComponents/theme.vue'
import BackgroundImg from './asideComponents/backgroundImg.vue'
export default defineComponent({
  components: {
    Collapse,
    Theme,
    BackgroundImg
  },
  data() {
    return {
      show: false
    }
  }
})
</script>

<style lang="scss" scoped>
</style>