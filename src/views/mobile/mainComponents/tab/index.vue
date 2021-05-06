<template>
  <div class="tab-container">
    <el-tabs type="card" closable>
      <el-tab-pane
        v-for="tabItem in moduleData.tabList"
        :key="tabItem.name"
        :label="tabItem.label"
        :name="tabItem.name"
        :lazy="true"
      >
        <main-content :parentModule="tabItem"></main-content>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    moduleData: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.tab-container {
  :deep .el-tabs__header {
    margin-bottom: 0;
    .el-tabs__nav-wrap {
      background-color: #ffffff;
    }
  }
  :deep .el-tabs__content:not(:empty) {
    padding: 10px;
  }
}
</style>