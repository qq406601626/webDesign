<template>
  <div class="swiper-setting-container" >
    <el-input type="text" v-model="mainState.currentSelectModule.value.title"></el-input>
  </div>
</template>

<script>
import {defineComponent, reactive} from "vue";
import {mainState} from '@/views/mobile/state.js'

export default defineComponent({
  props: {},
  setup() {
    return {
      mainState
    }
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.swiper-setting-container {

}
</style>