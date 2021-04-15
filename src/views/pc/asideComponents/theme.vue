<template>
  <div class="theme-container">
    <!--布局-->
    <el-row :gutter="20">
      <el-col :span="4">布局</el-col>
      <el-col :span="20">
        <el-space :size="20">
          <el-button round size="small" type="primary">全部</el-button>
          <img v-for="(img,index) in layoutData.list" :key="index" :src="img.icon" alt="">
        </el-space>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {ThemeLayoutClass} from "@/scripts";

export default defineComponent({
  setup() {
    const layoutData = {
      value: '',
      list: [
        new ThemeLayoutClass(ThemeLayoutClass.fullContent, 'full.png'),
        new ThemeLayoutClass(ThemeLayoutClass.rightContent, 'rightContent.png'),
        new ThemeLayoutClass(ThemeLayoutClass.leftContent, 'leftContent.png'),
      ]
    }
    return {
      layoutData
    }
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.theme-container {

}
</style>