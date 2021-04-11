<template>
  <el-container class="container">
    <el-header class="header">
      <el-row type="flex" align="center" justify="space-between" style="height: 100%">
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
      <el-aside class="aside" width="96px">
        <router-view name="aside"></router-view>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;

  .header {
    background: rgb(62, 63, 65);
    border-bottom: 1px solid rgba(0, 0, 0, .95);
  }

  .aside {
    background: rgb(62, 63, 65);
    border-right: 1px solid rgba(0, 0, 0, .95);
    padding: 60px 0;
  }

  .main {
    background: rgb(76, 76, 76);
  }
}

</style>