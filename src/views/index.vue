<template>
  <el-container>
    <el-header>
      <el-row type="flex" align="center" justify="space-between">
        <div class="logo"></div>
        <div class="design-type"></div>
        <el-space :size="20">
          <el-button>重置</el-button>
          <el-button type="primary">保存</el-button>
          <el-button type="info">退出</el-button>
        </el-space>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <router-view name="aside"></router-view>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
    }
  },
  methods: {

  }
});
</script>

<style lang="scss" scoped>
</style>