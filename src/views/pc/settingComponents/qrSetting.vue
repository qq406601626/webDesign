<template>
  <el-space
      direction="vertical"
      alignment="stretch"
      :size="20"
      class="qr-setting-container"
  >
    <el-row type="flex" justify="center" style="font-size: 20px">
      二维码
    </el-row>
    <el-divider style="margin-bottom: 0;margin-top: 0"></el-divider>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="8">二维码设置：</el-col>
      <el-col :span="16">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="8">二维码预览：</el-col>
      <el-col :span="16">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="8">二维码文字颜色：</el-col>
      <el-col :span="16">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="8">二维码文字大小：</el-col>
      <el-col :span="16">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="8">二维码文字加粗：</el-col>
      <el-col :span="16">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="8">二维码文字描述：</el-col>
      <el-col :span="16">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="8">二维码显示方式：</el-col>
      <el-col :span="16">
        <el-input></el-input>
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
  computed: {},
});
</script>

<style lang="scss" scoped>
.qr-setting-container {
  color: #ffffff;


}
</style>