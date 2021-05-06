<template>
  <el-space
      direction="vertical"
      alignment="stretch"
      :size="20"
      class="tab-setting-container"
  >
    <el-row type="flex" justify="center" style="font-size: 20px">
      标签页设置
    </el-row>
    <el-divider style="margin-bottom: 0;margin-top: 0"></el-divider>
    <el-row type="flex" align="top" :gutter="gutter">
      <el-col :span="6">图片：</el-col>
      <el-col :span="18">
        <el-alert
            type="warning"
            :closable="false"
            title="建议尺寸：100x100,小于200k　　　　　图片格式：png/webp/gif"
            style="margin-bottom: 10px"
        ></el-alert>
        <el-upload
            action=""
            list-type="picture-card"
            :file-list="fileList"
            class="swiper-upload">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-col>
    </el-row>
  </el-space>
</template>

<script>
import {defineComponent, reactive} from "vue";
import {mainState} from '@/views/mobile/state.js'

export default defineComponent({
  props: {},
  setup() {
    return {
      gutter: 20,
      fileList: [],
      mainState
    }
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.tab-setting-container {
  color: #ffffff;


}
</style>