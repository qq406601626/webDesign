<template>
  <div class="theme-container">
    <!-- 缩略图  -->
    <el-row type="flex" class="thumbnaily-box" :gutter="20">
      <el-col
          v-for="(thumbnailyItem) in thumbnailyData.list"
          :key="thumbnailyItem.name"
          :span="12"
          style="margin-bottom: 20px">
        <theme-thumbnaily
            :thumbnaily="thumbnailyItem"
            @click="handlerThumbnailyItemClick(thumbnailyItem)"
            :active="thumbnailyData.value===thumbnailyItem">
        </theme-thumbnaily>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {defineComponent, reactive, computed} from "vue";
import themeThumbnaily from '../../commonComponents/themeThumbnaily.vue'
import {MobileThemeThumbnailyClass} from "@/scripts";

export default defineComponent({
  components: {themeThumbnaily},
  setup() {
    const thumbnailyData = reactive({
      value: '',
      list: [
        new MobileThemeThumbnailyClass("classicsblue", "蓝色经典", undefined, undefined, true),
        new MobileThemeThumbnailyClass("blank", "空白主题", undefined, undefined, true),
        new MobileThemeThumbnailyClass("welcomenew", "辞旧迎新", undefined, undefined, true),
      ],
    })
    return {
      thumbnailyData
    }
  },
  methods: {
    handlerThumbnailyItemClick(thumbnailyItem) {
      this.thumbnailyData.value = thumbnailyItem
      this.Mobile.aside.theme.themeName = thumbnailyItem.name
    },
  },
});
</script>
<style lang="scss" scoped>
.theme-container {
  .thumbnaily-box {
    height: 100%;
    align-content: flex-start;
    font-size: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

</style>