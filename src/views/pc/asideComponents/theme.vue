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
              v-for="(layoutItem, index) in layoutData.list"
              :key="index"
              :span="6"
              style="font-size: 0"
          >
            <img @click="layoutData.value = layoutItem.value" :src="layoutItem.icon"
                 :class="['layout-img',{active:layoutData.value === layoutItem.value}]"
                 alt=""/>
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
            >{{ classifyItem.label }}
            </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- 分割线 -->
    <el-divider style="margin: 0"></el-divider>
    <!-- 缩略图  -->
    <el-row type="flex" style="height: 800px;padding: 0 10px;align-content: flex-start;font-size: 0" :gutter="20">
      <transition-group name="el-zoom-in-center">
        <el-col
            v-for="(thumbnailyItem) in thumbnailyData.thumbnailyList"
            :key="thumbnailyItem.name"
            :span="12"
            style="margin-bottom: 20px">
          <theme-thumbnaily
              :thumbnaily="thumbnailyItem" @click="handlerThumbnailyItemClick(thumbnailyItem)"
              :active="thumbnailyData.value===thumbnailyItem">
          </theme-thumbnaily>
        </el-col>
      </transition-group>
    </el-row>
  </el-space>

</template>

<script>
import {defineComponent, reactive, computed} from "vue";
import {
  ThemeLayoutClass,
  ThemeClassifyClass,
  ThemeThumbnailyClass,
} from "@/scripts";
import themeThumbnaily from './themeComponents/themeThumbnaily.vue'

export default defineComponent({
  components: {themeThumbnaily},
  setup() {
    const layoutData = reactive({
      value: ThemeLayoutClass.FullContent,
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
        new ThemeClassifyClass("商业促销", ThemeClassifyClass.ShangYeCuXiao),
        new ThemeClassifyClass("派对", ThemeClassifyClass.PaiDui),
        new ThemeClassifyClass("动漫游戏", ThemeClassifyClass.DongManYouXi),
      ],
    });
    const thumbnailyData = reactive({
      value: '',
      list: [
        new ThemeThumbnailyClass("niuniandaji", "牛年大吉", ThemeLayoutClass.RightContent, [ThemeClassifyClass.HunLiHunQing]),
        new ThemeThumbnailyClass("aidehunli", "爱的婚礼", ThemeLayoutClass.RightContent, [ThemeClassifyClass.HunLiHunQing]),
        new ThemeThumbnailyClass("zhongguofeng", "中国风", ThemeLayoutClass.RightContent, [ThemeClassifyClass.HunLiHunQing]),
      ],
      thumbnailyList: computed(() => {
        return thumbnailyData.list.filter(thumbnailyItem => {
          const layoutCondition = thumbnailyItem.layout === layoutData.value
          const classifyCondition = classifyData.value === ThemeClassifyClass.All ? true : thumbnailyItem.classify.includes(classifyData.value)
          return layoutCondition && classifyCondition
        })
      })
    })
    return {
      layoutData,
      classifyData,
      thumbnailyData,
    };
  },
  methods: {
    handlerThumbnailyItemClick(thumbnailyItem) {
      this.thumbnailyData.value = thumbnailyItem
      this.PC.aside.theme.thumbnailyItem = thumbnailyItem
    },
  },
});
</script>
<style lang="scss">
.theme-container {
  color: #ffffff;

  > .el-space__item:last-child {
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 0 12px hsl(0deg 0% 100% / 80%);
    }

    &::-webkit-scrollbar-track-piece {
      background-color: #333;
    }

    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .layout-img {
    margin: 0 10px;
    cursor: pointer;
    transition: border-color 150ms linear;
    border: 1px solid #ffffff;

    &.active, &:hover {
      border: 1px solid #409eff;
    }
  }
}
</style>