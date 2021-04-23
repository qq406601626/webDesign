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
    <el-divider style="margin-bottom: 0; margin-top: 0"></el-divider>
    <el-row type="flex" align="top" :gutter="0">
      <el-col :span="9">二维码设置：</el-col>
      <el-col :span="15">
        <el-space direction="vertical" alignment="stretch" :size="10">
          <el-space :size="[10, 0]">
            <el-upload action="">
              <el-button type="primary" size="small">自定义上传</el-button>
            </el-upload>
            <el-button type="primary" size="small">系统二维码</el-button>
          </el-space>
          <el-col :span="24">
            <el-alert
              type="warning"
              :closable="false"
              title="建议尺寸：100x100,小于200k　　　图片格式：png/webp/gif"
            ></el-alert>
          </el-col>
        </el-space>
      </el-col>
    </el-row>
    <el-row type="flex" align="top" :gutter="0">
      <el-col :span="9">二维码预览：</el-col>
      <el-col :span="15">
        <el-image
          src="/src/assets/img/test/qr.png"
          fit="contain"
          style="width: 98px; height: 98px"
          :preview-src-list="['/src/assets/img/test/qr.png']"
        >
          <template #error>
            <div class="el-image__error">
              <i class="el-icon-picture-outline" style="font-size: 50px"></i>
            </div>
          </template>
        </el-image>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="9">二维码文字颜色：</el-col>
      <el-col :span="15">
        <el-color-picker
          show-alpha
          :predefine="['#ff0000', '#00ff00', '#0000ff']"
        ></el-color-picker>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="9">二维码文字大小：</el-col>
      <el-col :span="15">
        <el-slider :min="12" :max="50" :marks="_marks"></el-slider>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="9">二维码文字加粗：</el-col>
      <el-col :span="15">
        <el-radio-group>
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row type="flex" align="top" :gutter="0">
      <el-col :span="9">二维码文字描述：</el-col>
      <el-col :span="15">
        <el-input type="textarea"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle" :gutter="0">
      <el-col :span="9">二维码显示方式：</el-col>
      <el-col :span="15">
        <el-link type="primary">去设置</el-link>
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
.qr-setting-container {
  color: #ffffff;
}
</style>