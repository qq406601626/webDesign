<template>
  <div class="msg-container" v-show="PC.main.msg.show">
    <div
        class="msg-box"
        v-for="(msgItem, index) in msgList.slice(0, PC.main.msg.count)"
        :key="index"
        :style="{
        backgroundColor: PC.main.msg.backgroundColor,
      }"
    >
      <div class="avatar-box">
        <img
            src="/src/views/pc/mainComponents/img/avatar.jpg"
            alt=""
            class="avatar-img"
        />
        <img
            src="/src/views/pc/mainComponents/img/avatarShade.png"
            alt=""
            class="avatar-shade-img"
        />
      </div>
      <div class="content-box">
        <div class="title" :style="{fontSize:(1/PC.main.msg.count)*108+'px' }">Hi现场</div>
        <div class="content" :style="{fontSize:(1/PC.main.msg.count)*90+'px' }">{{ msgItem }}</div>
      </div>
      <img
          src="/src/views/pc/mainComponents/img/atmosphere.png"
          class="atmosphere"
      />
    </div>
  </div>
</template>

<script>
import {defineComponent, computed} from "vue";

export default defineComponent({
  setup() {
    const msgList = [
      '欢迎使用"Hi现场"大屏幕',
      "微信扫描屏幕二维码",
      "发送文字或图片参与上墙互动",
      "使用快捷键可快速切换互动",
      "现场气氛Hi起来",
    ];
    return {
      msgList,
    };
  },
});
</script>

<style lang="scss" scoped>
.msg-container {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;

  .msg-box {
    display: flex;
    padding: 20px;
    flex-shrink: 1;
    flex-grow: 1;
    border: 10px solid rgb(0, 28, 133);
    margin-top: 10px;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;

    &:first-child {
      margin-top: 0;
    }

    .avatar-box {
      position: relative;
      height: 100%;

      .avatar-img {
        height: 100%;
        border-radius: 50%;
      }

      .avatar-shade-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        height: 130%;
        transition: all 300ms linear;
      }
    }

    .content-box {
      color: #ffffff;
      line-height: 1.4;
      flex-grow: 1;
      text-align: center;

      .title {
        font-size: 36px;
        font-weight: bolder;
        transition: font-size 300ms linear;
      }

      .content {
        font-size: 30px;
        transition: font-size 300ms linear;
      }
    }

    .atmosphere {
      align-self: flex-end;
      height: 60%;
      transition: height 300ms linear;
    }
  }
}
</style>