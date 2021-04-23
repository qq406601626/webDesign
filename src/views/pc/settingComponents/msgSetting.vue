<template>
  <el-space
    direction="vertical"
    alignment="stretch"
    :size="20"
    class="msg-setting-container"
  >
    <el-row type="flex" justify="center" style="font-size: 20px">
      滚动消息
    </el-row>
    <el-divider style="margin-bottom: 0; margin-top: 0"></el-divider>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="leftColSpan">头像形状</el-col>
      <el-col :span="rightColSpan">
        <el-radio-group>
          <el-radio label="1">方形</el-radio>
          <el-radio label="2">原形</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="leftColSpan">翻页效果</el-col>
      <el-col :span="rightColSpan">
        <el-radio-group>
          <el-radio label="1">缩放</el-radio>
          <el-radio label="2">旋转</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="leftColSpan">消息条数</el-col>
      <el-col :span="rightColSpan" style="padding-left:7px">
        <el-slider :min="3" :max="5" :marks="_newsCountMarks"></el-slider>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="leftColSpan">消息条颜色</el-col>
      <el-col :span="rightColSpan">
        <el-color-picker
          show-alpha
          :predefine="['#ff0000', '#00ff00', '#0000ff']"
        ></el-color-picker>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="leftColSpan">文字颜色</el-col>
      <el-col :span="rightColSpan">
        <el-color-picker
          show-alpha
          :predefine="['#ff0000', '#00ff00', '#0000ff']"
        ></el-color-picker>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="leftColSpan">消息透明度</el-col>
      <el-col :span="rightColSpan" style="padding-left:7px">
        <el-slider :min="0" :max="100" :marks="_newsbarAlphaMarks"></el-slider>
      </el-col>
    </el-row>
  </el-space>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
  data() {
    return {
      leftColSpan: 6,
      rightColSpan: 18,
    };
  },
  computed: {
    _newsCountMarks() {
      let marks = {};
      for (let i = 3; i <= 5; i += 1) {
        marks[i] = String(i);
      }
      return marks;
    },
    _newsbarAlphaMarks() {
      let marks = {};
      for (let i = 0; i <= 100; i += 25) {
        marks[i] = i + "%";
      }
      return marks;
    },
  },
});
</script>

<style lang="scss" scoped>
.msg-setting-container {
  color: #ffffff;
}
</style>