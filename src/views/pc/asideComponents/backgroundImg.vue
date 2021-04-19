<template>
  <el-space
    direction="vertical"
    alignment="stretch"
    :size="20"
    class="background-img-container"
  >
    <!-- 背景图 -->
    <el-row justify="center">
      <el-image
        src="/src/views/pc/asideComponents/img/zhongguofeng/bg.jpg"
        fit="contain"
        style="width: 100%; height: 225px"
        :preview-src-list="[
          '/src/views/pc/asideComponents/img/zhongguofeng/bg.jpg',
        ]"
      >
        <template #error>
          <div class="el-image__error">
            <i class="el-icon-picture-outline" style="font-size: 50px"></i>
          </div>
        </template>
      </el-image>
    </el-row>
    <!-- 上传/恢复 -->
    <el-row type="flex" align="middle" justify="center">
      <el-space direction="horizontal" alignment="center" :size="20">
        <el-upload action="" :limit="1">
          <el-button type="primary" size="small">上传替换</el-button>
        </el-upload>
        <el-button size="small">恢复主题背景</el-button>
      </el-space>
    </el-row>
    <!-- 说明 -->
    <div style="line-height: 24px">
      请上传与现场实际大屏幕投影分辨率尺寸比例相同的图片，部分推荐的图片像素比例（请按现场实际效果设计）：
    </div>
    <el-row type="flex" justify="center" style="color: #409eff">
      1280px*800px(8:5)或1920px*1080px(16:9)
    </el-row>
    <div>格式为jpg/bmp/png/gif/webp；文件大小不超过5M</div>
  </el-space>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.background-img-container {
  color: #ffffff;
}
</style>