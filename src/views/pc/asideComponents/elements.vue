<template>
  <el-space
      direction="vertical"
      alignment="stretch"
      :size="20"
      class="elements-container">
    <!--居中标题-->
    <el-row type="flex" align="middle">
      <el-col :span="6">底部版权信息</el-col>
      <el-col :span="18">
        <el-switch v-model="PC.aside.name"  active-value="Y" inactive-value="N" :width="50"></el-switch>
      </el-col>
    </el-row>
  </el-space>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  setup(){

  },
  methods: {
    print(){
      console.log(this.PC.aside)
    }
  },
});
</script>

<style lang="scss" scoped>
.elements-container{
  color: #ffffff;
}
</style>