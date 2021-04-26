<template>
  <!--  settingComponentName:{{ settingComponentName }}-->
  <!--  <main-title-->
  <!--    v-domHover:[{afterHoverClick,afterHoverDelete}].noShade="'mainTitleSetting'"-->
  <!--  ></main-title>-->
  <!--  <el-button-->
  <!--    class="msg"-->
  <!--    v-domHover:[{afterHoverClick,afterHoverDelete}].noShade="'mainMsgSetting'"-->
  <!--    >msg-->
  <!--  </el-button>-->

  <!-- <div v-domHover.noShade style="width: 200px;height: 200px">11111111111</div>
  <div v-domHover.noShade style="width: 200px;height: 200px">2222222222</div>

  <div
    v-domHover.noShade
    class="wraper"
    style="
      width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: green;
    "
  >
    <div>11111111111</div>
    <div
      v-domHover
      class="inner"
      style="width: 100px; height: 100px; background: gold"
    >
      <div
        v-domHover
        class="inner2"
        style="width: 50px; height: 50px; background: blue"
      ></div>
    </div>
    <div>2222222222222</div>
  </div> -->

  <el-button @click="changeList">changeList</el-button>

  <div v-domHover v-for="(listItem, index) in list" :key="listItem">
    <div>{{ listItem }}</div>
  </div>

  <collapse :visible="!!settingComponentName" class="main-setting-content-wrap">
    <template #default>
      <component
        v-if="settingComponentName"
        :is="settingComponentName"
        class="main-setting-content-component"
      ></component>
    </template>
    <template #collapse-button>
      <div
        class="collapse-button el-icon-d-arrow-right"
        @click="settingComponentName = ''"
      ></div>
    </template>
  </collapse>
</template>

<script>
import { defineComponent, ref } from "vue";
import mainTitle from "./mainComponents/title.vue";
import mainTitleSetting from "./settingComponents/tileSetting.vue";
import mainQrSetting from "./settingComponents/qrSetting.vue";
import mainMsgSetting from "./settingComponents/msgSetting.vue";
import Collapse from "@/components/collapse.vue";

export default defineComponent({
  components: {
    Collapse,
    mainTitle,
    mainTitleSetting,
    mainQrSetting,
    mainMsgSetting,
  },
  setup() {
    const settingComponentName = ref(undefined);
    return {
      settingComponentName,
    };
  },
  data() {
    return {
      settingComponentName: "",
      list: ["11111111111111"],
    };
  },

  methods: {
    afterHoverDelete() {
      this.settingComponentName = "";
    },
    afterHoverClick(componentName) {
      this.settingComponentName = componentName;
    },
    changeList(){
      this.list.unshift('qqqqqqqqqq')
    }
  },
});
</script>

<style lang="scss" scoped>
.main-setting-content-wrap {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin-left: 1px;
  z-index: 2;
  background: rgb(62, 63, 65);

  .main-setting-content-component {
    width: 440px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .collapse-button {
    width: 10px;
    height: 100%;
    background: #2a2a2a;
    position: absolute;
    top: 0;
    left: -10px;
    color: #909399;
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: #333333;
      color: #a6a9ad;
    }

    &:before {
      transform: translateX(-1px) scale(0.8);
    }
  }
}
</style>