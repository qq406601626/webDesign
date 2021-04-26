<template>
  <el-space direction="vertical" alignment="stretch" :size="60" class="msg-container" v-show="PC.main.msg.show">
    <div class="msg-box" v-for="(msgItem,index) in msgList" :key="index">{{msgItem}}</div>
  </el-space>
</template>

<script>
import {defineComponent, computed} from "vue";

export default defineComponent({
  setup() {
    const msgList = computed(() =>
        ['欢迎使用"Hi现场"大屏幕', '微信扫描屏幕二维码', '发送文字或图片参与上墙互动', '使用快捷键可快速切换互动', '现场气氛Hi起来'].slice(0,3)
    )
    return {
      msgList
    }
  }
});
</script>

<style lang="scss" scoped>
.msg-container {
  width: 100%;
  height: 600px;
  background: red;
}

</style>