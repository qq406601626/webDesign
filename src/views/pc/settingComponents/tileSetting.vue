<template>
  <el-space
      direction="vertical"
      alignment="stretch"
      :size="20"
      class="title-setting-container"
  >
    <el-row type="flex" justify="center" style="font-size: 20px">
      标题设置
    </el-row>
    <el-divider style="margin-bottom: 0;margin-top: 0"></el-divider>
    <el-row type="flex" align="middle" :gutter="20">
      <el-col :span="6">文字颜色：</el-col>
      <el-col :span="18">
        <el-color-picker
            v-model="PC.main.title.fontColor"
            show-alpha
            :predefine="['#ff0000', '#00ff00', '#0000ff']"
        >
        </el-color-picker>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="20">
      <el-col :span="6">文字大小：</el-col>
      <el-col :span="18">
        <el-slider
            v-model="PC.main.title.fontSize"
            :min="12"
            :max="50"
            :marks="_marks"
        ></el-slider>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="20">
      <el-col :span="6">文字加粗：</el-col>
      <el-col :span="18">
        <el-radio-group v-model="PC.main.title.fontBolder">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="20">
      <el-col :span="6">标题商标：</el-col>
      <el-col :span="18">
        <el-upload
            action=""
            list-type="picture-card"
            class="title-brand"
        >
          <i class="el-icon-plus" style="font-size: 12px;line-height: 40px"></i>
        </el-upload>
      </el-col>
    </el-row>
    <el-row type="flex" align="top" :gutter="20">
      <el-col :span="6">标题内容：</el-col>
      <el-col :span="18">
        <el-input type="textarea"></el-input>
      </el-col>
    </el-row>
  </el-space>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
  computed: {
    _marks() {
      let marks = {};
      for (let i = 12; i <= 50; i += 6) {
        marks[i] = String(i);
      }
      return marks;
    },
  },
});
</script>

<style lang="scss" scoped>
.title-setting-container {
  color: #ffffff;

  .title-brand {
    ::v-deep .el-upload {
      width: 40px;
      height: 40px;
      font-size: 0;
      line-height: 0;
    }
  }
}
</style>