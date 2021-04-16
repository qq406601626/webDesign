<template>
  <el-space
    direction="vertical"
    alignment="stretch"
    :size="20"
    class="theme-container"
  >
    <!--布局-->
    <el-row type="flex" align="middle">
      <el-col :span="4">布局</el-col>
      <el-col :span="20">
        <el-row>
          <el-col
            v-for="(img, index) in layoutData.list"
            :key="index"
            :span="6"
            style="font-size: 0"
          >
            <img :src="img.icon" alt="" style="padding: 0 15px" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 分类 -->
    <el-row type="flex" align="middle">
      <el-col :span="4">分类</el-col>
      <el-col :span="20">
        <el-row type="flex" :gutter="0">
          <el-col
            v-for="(classifyItem, index) in classifyData.list"
            :key="index"
            :span="6"
          >
            <el-button
              round
              size="mini"
              :type="
                classifyData.value === classifyItem.value ? 'primary' : 'text'
              "
              @click="classifyData.value = classifyItem.value"
              >{{ classifyItem.label }}</el-button
            >
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 分割线 -->
    <el-divider style="margin:0"></el-divider>
  </el-space>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { ThemeLayoutClass, ThemeClassifyClass } from "@/scripts";

export default defineComponent({
  setup() {
    const layoutData = reactive({
      value: "",
      list: [
        new ThemeLayoutClass(ThemeLayoutClass.FullContent, "full.png"),
        new ThemeLayoutClass(ThemeLayoutClass.RightContent, "rightContent.png"),
        new ThemeLayoutClass(ThemeLayoutClass.LeftContent, "leftContent.png"),
      ],
    });
    const classifyData = reactive({
      value: ThemeClassifyClass.All,
      list: [
        new ThemeClassifyClass("全部", ThemeClassifyClass.All),
        new ThemeClassifyClass("默认", ThemeClassifyClass.Default),
        new ThemeClassifyClass("年会", ThemeClassifyClass.NianHui),
        new ThemeClassifyClass("婚礼婚庆", ThemeClassifyClass.HunLiHunQing),
        new ThemeClassifyClass("节日", ThemeClassifyClass.JieRi),
        new ThemeClassifyClass("商务", ThemeClassifyClass.ShangWu),
        new ThemeClassifyClass("校园", ThemeClassifyClass.XiaoYuan),
        new ThemeClassifyClass("商务促销", ThemeClassifyClass.ShangWuCuXiao),
        new ThemeClassifyClass("派对", ThemeClassifyClass.PaiDui),
        new ThemeClassifyClass("动漫游戏", ThemeClassifyClass.DongManYouXi),
      ],
    });
    return {
      layoutData,
      classifyData,
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.theme-container {
  color: #ffffff;
}
</style>