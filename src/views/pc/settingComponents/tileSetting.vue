<template>
  <el-space
      direction="vertical"
      alignment="stretch"
      :size="20"
      class="title-setting-container"
  >
    <el-row type="flex" justify="center" style="font-size: 26px">
      标题设置
    </el-row>
    <el-row type="flex" align="middle" :gutter="20">
      <el-col :span="6">文字颜色：</el-col>
      <el-col :span="18">
        <el-color-picker
            v-model="PC.main.title.fontColor"
            show-alpha
            :predefine="['#ff0000','#00ff00','#0000ff']">
        </el-color-picker>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="20">
      <el-col :span="6">文字大小：</el-col>
      <el-col :span="18">
        <el-slider v-model="PC.main.title.fontSize" :min="12" :max="50" :marks="_marks"></el-slider>
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
      <el-col :span="18">11111</el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="20">
      <el-col :span="6">标题内容：</el-col>
      <el-col :span="18">11111</el-col>
    </el-row>
  </el-space>
</template>

<script>
import {defineComponent, ref, reactive} from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
  computed: {
    _marks() {
      let marks = {}
      for (let i = 12; i <= 50; i += 6) {
        marks[i] = String(i)
      }
      return marks
    }
  }
});
</script>

<style lang="scss" scoped>
.title-setting-container {
  color: #ffffff;
}
</style>