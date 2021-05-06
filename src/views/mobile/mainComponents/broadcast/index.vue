<template>
  <div class="broadcast-container" v-aspectRatio="16 / 9">
    <el-image :src="moduleData.poster" fit="contain">
      <template #error>
        <img
          src="/src/views/mobile/mainComponents/img/broadcast.png"
          alt=""
          style="width: 100%; height: 100%"
        />
      </template>
    </el-image>
    <danmu v-if="true"></danmu>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import danmu from './danmu.vue'

export default defineComponent({
  components:{danmu},
  props: {
    moduleData: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.broadcast-container {
}
</style>