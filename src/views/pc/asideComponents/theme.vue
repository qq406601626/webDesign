<template>
  <el-space direction="vertical" alignment="stretch" :size="20" class="theme-container">
    <!--布局-->
    <el-row type="flex" align="middle">
      <el-col :span="4">布局</el-col>
      <el-col :span="20">
        <el-space :size="20">
          <el-button round size="mini" type="primary">全部</el-button>
          <img v-for="(img,index) in layoutData.list" :key="index" :src="img.icon" alt="" @click="">
        </el-space>
      </el-col>
    </el-row>
    <el-row type="flex" align="middle">
      <el-col :span="4">分类</el-col>
      <el-col :span="20">
        <el-row type="flex" :gutter="20">
          <el-col :span="6" style="text-align: center;">
            <el-button round size="mini" type="primary">全部</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">默认</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">年会</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">节日</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">商务</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">校园</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">婚礼婚庆</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">商务促销</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">派对</el-button>
          </el-col>
          <el-col :span="6" style="text-align: center;">
            <el-button type="text">动漫游戏</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-space>
</template>

<script>
import {defineComponent, reactive} from "vue";
import {ThemeLayoutClass} from "@/scripts";

export default defineComponent({
  setup() {
    const layoutData = reactive({
      value: '',
      list: [
        new ThemeLayoutClass(ThemeLayoutClass.fullContent, 'full.png'),
        new ThemeLayoutClass(ThemeLayoutClass.rightContent, 'rightContent.png'),
        new ThemeLayoutClass(ThemeLayoutClass.leftContent, 'leftContent.png'),
      ]
    })
    return {
      layoutData
    }
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.theme-container {
  color: #ffffff;
}
</style>