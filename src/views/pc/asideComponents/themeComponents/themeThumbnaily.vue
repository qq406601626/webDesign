<template>
  <div class="theme-thumbnaily-container">
    <img :src="thumbnaily.thumbnail" alt="" class="thumbnaily-img">
    <div class="tag desc-box">
      <div class="label">{{ thumbnaily.label }}</div>
      <el-tag size="mini" type="danger" effect="dark" style="margin-left: 10px">动态限免</el-tag>
    </div>
    <div class="tag new">NEW</div>
    <div class="tag checked">
      <div class="el-icon-check"></div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {ThemeThumbnailyClass,} from "@/scripts";

export default defineComponent({
  props: {
    thumbnaily: {
      type: ThemeThumbnailyClass,
      required: true
    }
  },
  setup() {

  },
});
</script>

<style lang="scss" scoped>
.theme-thumbnaily-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 150ms linear;

  &:hover, &.active {
    border: 1px solid #409eff;
  }

  .thumbnaily-img {
    width: 100%;
  }

  .tag {
    position: absolute;

    &.desc-box {
      width: 100%;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      padding: 6px 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }

    &.new {
      font-size: 12px;
      line-height: 12px;
      padding: 4px 30px;
      background: #409eff;
      top: 0;
      left: 0;
      transform-origin: top center;
      transform: translate3d(-50%, 0, 0) rotate(-45deg) translate3d(0, 16px, 0);
      z-index: 1;
    }

    &.checked {
      top: 0;
      right: 0;
      z-index: 1;

      .el-icon-check {
        font-size: 14px;
        position: relative;
        z-index: 2;
        padding: 2px 2px 0 0;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        background: #409eff;
        width: 60px;
        height: 22px;
        transform-origin: top center;
        transform: translate3d(50%, 0, 0) rotate(45deg);
      }
    }
  }
}
</style>