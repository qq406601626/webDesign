<template>
  <el-space
      direction="vertical"
      alignment="stretch"
      :size="20"
      class="swiper-setting-container"
  >
    <!--    <el-input type="text" v-model="mainState.currentSelectModule.value.title"></el-input>-->
    <el-row type="flex" justify="center" style="font-size: 20px">
      轮播图设置
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
    <el-row type="flex" align="middle" :gutter="gutter">
      <el-col :span="6">活动标题：</el-col>
      <el-col :span="18">
       <el-input placeholder="请输入活动标题" :maxlength="10"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="gutter">
      <el-col :span="6">活动时间：</el-col>
      <el-col :span="18">
        <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%">
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="gutter">
      <el-col :span="6">隐藏时间：</el-col>
      <el-col :span="18">
        <el-radio-group>
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="gutter">
      <el-col :span="6">文字颜色：</el-col>
      <el-col :span="18">
        <el-color-picker
            show-alpha
            :predefine="['#ff0000', '#00ff00', '#0000ff']"
        ></el-color-picker>
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
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      },],
      mainState
    }
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.swiper-setting-container {
  color: #ffffff;

  .swiper-upload {
    ::v-deep .el-upload-list__item {
      width: 176px;
      height: 99px;
    }

    ::v-deep .el-upload--picture-card {
      width: 176px;
      height: 99px;
      display: flex;
      line-height: 0;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>