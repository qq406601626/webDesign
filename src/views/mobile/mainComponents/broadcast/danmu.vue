<template>
  <div class="broadcast-danmu-box">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="danmu-item"
      style="color: #ffffff; background: #00ff00"
    >
      <span class="el-icon-user-solid"></span>
      {{ item }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      list: [
        "云直播：发送文字或图片参与上墙互动",
        "互动现场：看直播参与互动游戏",
        "直播现场：一个人嗨也是一群人嗨，嗨起来",
        "云直播：发送文字或图片参与上墙互动",
        "互动现场：看直播参与互动游戏",
        "云直播：发送文字或图片参与上墙互动",
        "直播现场：一个人嗨也是一群人嗨，嗨起来",
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.broadcast-danmu-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  .danmu-item {
    border-radius: 20px;
    padding: 4px 10px;
    .el-icon-user-solid {
      color: #409eff;
      font-size: 14px;
      border-radius: 50%;
      background: #ffffff;
    }
  }
}
</style>