<template>
  <el-space direction="vertical" :size="20" :spacer="spacer" class="pc-aside-container" style="width: 100%">
    <aside-module v-for="(module,index) in asideModuleList" :key="index" :module="module"></aside-module>
  </el-space>
</template>

<script>
import {defineComponent, h} from 'vue'
import Collapse from '@/components/collapse.vue'
import Theme from './asideComponents/theme.vue'
import BackgroundImg from './asideComponents/backgroundImg.vue'
import {AsideClass} from '@/scripts'
import AsideModule from '../commonComponents/asideModule.vue'

export default defineComponent({
  components: {
    Collapse,
    Theme,
    BackgroundImg,
    AsideModule
  },
  data() {
    return {
      asideModuleList: [
        new AsideClass('主题', 'platform-eleme'),
        new AsideClass('界面元素', 'user-solid'),
        new AsideClass('背景图片', 'star-on'),
      ],
      spacer: h('div', {
        style: {
          width: '30px',
          height: '1px',
          background: 'hsla(0, 0%, 100%, .45)',
          marginLeft: '33px'
        }
      })
    }
  }

})
</script>

<style lang="scss" scoped></style>