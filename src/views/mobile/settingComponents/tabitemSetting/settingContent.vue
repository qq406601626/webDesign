<template>
  <el-space
      direction="vertical"
      alignment="stretch"
      :size="20"
  >
    <el-row type="flex" align="top" :gutter="gutter">
      <el-col :span="7">标签页：</el-col>
      <el-col :span="17">
        <el-row>
          <el-space :size="[10,10]" :wrap="true">
            <el-button size="mini" type="primary" class="el-tabs__item" style="height: auto">标签1<span
                class="el-icon-close"></span></el-button>
            <el-button size="mini" type="primary" class="el-tabs__item" style="height: auto">标签2<span
                class="el-icon-close"></span></el-button>
            <el-button size="mini" type="primary" class="el-tabs__item" style="height: auto">标签3<span
                class="el-icon-close"></span></el-button>
            <el-button size="mini" type="primary" icon="el-icon-plus">标签页</el-button>
          </el-space>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-input size="mini"></el-input>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" align="top" :gutter="gutter">
      <el-col :span="7">标签页类型：</el-col>
      <el-col :span="17">
        <el-row>
          <el-radio-group v-model="aaaaa">
            <el-radio label="component">组件</el-radio>
            <el-radio label="link">链接</el-radio>
          </el-radio-group>
        </el-row>
        <el-row type="flex" align="middle" style="margin-top: 20px">
          <template v-if="aaaaa==='component'">
            <el-dropdown>
              <el-button type="primary">
                选择组件<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
          <template v-if="aaaaa==='link'">
            <el-col :span="4">
              <span style="font-size: 14px">跳转：</span>
            </el-col>
            <el-col :span="20">
              <el-input size="mini"></el-input>
            </el-col>
          </template>
        </el-row>
      </el-col>
    </el-row>
  </el-space>
</template>

<script>
import {defineComponent, reactive} from "vue";
import {mainState} from "@/views/mobile/state.js";

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
  data() {
    return {
      aaaaa: ''
    }
  },
  methods: {},
});
</script>

<style lang="scss" scoped>

</style>