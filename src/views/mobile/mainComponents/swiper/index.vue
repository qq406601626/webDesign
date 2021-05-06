<template>
  <div class="swiper-container" v-aspectRatio="16/9">
    <el-carousel indicator-position="none" arrow="never" :autoplay="true">
      <el-carousel-item v-for="(banner,index) in moduleData.imgList" :key="index">
        <el-image :src="banner" style="width: 100%;height: 100%">
          <template #error>
            <el-row type="flex" justify="center" align="middle" style="height: 100%">
              <i class="el-icon-picture-outline" style="font-size: 60px;color: rgb(144, 147, 153)"></i>
            </el-row>
          </template>
        </el-image>
      </el-carousel-item>
    </el-carousel>
    <el-row type="flex" align="middle" justify="center" class="info-box">
      <div class="title">{{moduleData.title}}</div>
      <div class="time">{{moduleData.time}}</div>
    </el-row>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    moduleData: {
      type: Object,
      required: true
    }
  },
});
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;

  :deep .el-carousel {
    height: 100%;
    z-index: 0;

    .el-carousel__container {
      height: 100%;
    }
  }

  .info-box {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    flex-direction: column;

    .title {
      font-size: 18px;
      line-height: 1.5;
    }

    .time {
      font-size: 12px;
    }
  }
}
</style>