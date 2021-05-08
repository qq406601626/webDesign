<template>
  <el-space
    direction="vertical"
    alignment="stretch"
    :size="20"
    class="tabitem-setting-container"
  >
    <el-row type="flex" justify="center" style="font-size: 20px">
      标签项设置
    </el-row>
    <el-divider style="margin-bottom: 0; margin-top: 0"></el-divider>
    <tabItemSettingContent></tabItemSettingContent>
  </el-space>
</template>

<script>
import { defineComponent, reactive } from "vue";
import tabItemSettingContent from "./settingContent.vue";
import { mainState } from "@/views/mobile/state.js";

export default defineComponent({
  components:{tabItemSettingContent},
  props: {},
  setup() {
    return {
      gutter: 20,
      fileList: [],
      mainState,
      imageUrl: "/src/views/mobile/mainComponents/img/classicsblue/banner.png",
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.tab-setting-container {
  color: #ffffff;
  .tab-upload {
    :deep .el-upload--picture-card {
      width: 167px;
      height: 20px;
      display: flex;
      line-height: 0;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-right: 20px;
    }
  }
}
</style>