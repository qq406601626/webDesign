<template>
  settingComponentName:{{ settingComponentName }}
  <main-title
    v-domHover:[{afterHoverClick,afterHoverDelete}].noShade="'mainTitleSetting'"
  ></main-title>
  <el-button
    class="msg"
    v-domHover:[{afterHoverClick,afterHoverDelete}].noShade="'mainMsgSetting'"
    >msg</el-button
  >
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
    // const settingComponentName = ref(undefined);
    const qqqqq = ref("qqqqqqqqqq");
    return {
      qqqqq,
      // settingComponentName,
    };
  },
  data() {
    return {
      settingComponentName: "",
    };
  },

  methods: {
    afterHoverDelete() {
      console.log(this.settingComponentName);
      this.settingComponentName = "";
      console.log(this.settingComponentName)
    },
    afterHoverClick(componentName) {
      this.settingComponentName = componentName;
    },
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