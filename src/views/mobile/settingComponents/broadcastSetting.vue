<template>
  <el-space
    direction="vertical"
    alignment="stretch"
    :size="20"
    class="broadcast-setting-container"
  >
    <el-row type="flex" justify="center" style="font-size: 20px">
      直播间设置
    </el-row>
    <el-divider style="margin-bottom: 0; margin-top: 0"></el-divider>
    <el-row type="flex" align="middle" :gutter="gutter">
      <el-col :span="6">直播方式：</el-col>
      <el-col :span="18">
        <el-link type="primary" href="">去设置</el-link>
      </el-col>
    </el-row>
    <el-row type="flex" align="top" :gutter="gutter">
      <el-col :span="6">直播封面：</el-col>
      <el-col :span="18">
        <el-row type="flex" align="bottom" style="margin-bottom:20px;">
          <el-upload
            action=""
            list-type="picture-card"
            class="broadcast-upload"
            :show-file-list="false"
          >
            <img
              v-if="imageUrl"
              :src="imageUrl"
              class="broadcast"
              style="width: 100%; height: 100%"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-button type="primary" size="mini">恢复默认</el-button>
        </el-row>
            <el-alert
            type="warning"
            :closable="false"
            title=" 建议尺寸：300x168，小于200k　　　　图片格式：png/jpg"
        ></el-alert>
      </el-col>
    </el-row>
       <el-row type="flex" align="top" :gutter="gutter">
      <el-col :span="6">悬浮弹幕：</el-col>
      <el-col :span="18">
         <el-switch
          active-value="Y"
          inactive-value="N"
          active-text="ON"
          inactive-text="OFF"
          :width="50"
        ></el-switch>
      </el-col>
    </el-row>
  </el-space>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { mainState } from "@/views/mobile/state.js";

export default defineComponent({
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
.broadcast-setting-container {
  color: #ffffff;
  .broadcast-upload {
    :deep .el-upload--picture-card {
      width: 176px;
      height: 99px;
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