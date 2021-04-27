<template>
  <div   class="msg-container" v-show="PC.main.msg.show">
    <div class="msg-box" v-for="(msgItem,index) in msgList" :key="index" :gutter="20">
      <div class="avatar-box">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, computed} from "vue";

export default defineComponent({
  setup() {
    const msgList = computed(() =>
        ['欢迎使用"Hi现场"大屏幕', '微信扫描屏幕二维码', '发送文字或图片参与上墙互动', '使用快捷键可快速切换互动', '现场气氛Hi起来'].slice(0, 3)
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
  display: flex;
  flex-direction: column;
  background: red;

  .msg-box {
    padding: 20px;
    flex-shrink: 1;
    flex-grow: 1;
    border: 10px solid rgb(0, 28, 133);
    margin-top: 10px;
    border-radius: 10px;
    &:first-child{
      margin-top: 0;
    }
  }
}

</style>