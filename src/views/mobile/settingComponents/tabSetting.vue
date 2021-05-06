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
    <el-divider style="margin-bottom: 0; margin-top: 0"></el-divider>
    <el-row type="flex" align="top" :gutter="gutter">
      <el-col :span="6">图片：</el-col>
      <el-col :span="18">
        <el-row type="flex" align="middle" style="margin-bottom: 20px">
          <el-upload
            action=""
            list-type="picture-card"
            class="tab-upload"
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
          title=" 建议尺寸：750x72，小于200k　　　　　图片格式：png/jpg"
        ></el-alert>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="gutter">
      <el-col :span="6">标签颜色：</el-col>
      <el-col :span="18">
        <el-row type="flex" align="middle">
          <el-col :span="12">
            <el-row type="flex" align="middle">
              <span style="font-size:14px;">点击样式：</span>
              <el-color-picker
                show-alpha
                :predefine="['#ff0000', '#00ff00', '#0000ff']"
              ></el-color-picker>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row type="flex" align="middle">
              <span style="font-size:14px;">静止样式：</span>
              <el-color-picker
                show-alpha
                :predefine="['#ff0000', '#00ff00', '#0000ff']"
              ></el-color-picker>
            </el-row>
          </el-col>
        </el-row>
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