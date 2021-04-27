<template>
  <main-title
    v-domHover:[{afterHoverClick,afterHoverDelete,afterHoverBlur}].noShade="
      'mainTitleSetting'
    "
  ></main-title>
  <el-row type="flex" align="middle" :gutter="60" style="height: 100%">
    <el-col :offset="1" :span="18">
      <main-msg
        v-domHover:[{afterHoverClick,afterHoverBlur}]="'mainMsgSetting'"
      ></main-msg>
    </el-col>
    <el-col :span="4">
      <div style="height: 300px; background: green"></div>
    </el-col>
  </el-row>

  <collapse :visible="!!settingComponentName" class="main-setting-content-wrap">
    <template #default>
      <transition name="el-fade-in-linear" mode="out-in">
        <component
          v-if="settingComponentName"
          :is="settingComponentName"
          class="main-setting-content-component"
        ></component>
      </transition>
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
import mainMsg from "./mainComponents/msg.vue";
import mainQrSetting from "./settingComponents/qrSetting.vue";
import mainMsgSetting from "./settingComponents/msgSetting.vue";
import Collapse from "@/components/collapse.vue";

export default defineComponent({
  components: {
    Collapse,
    mainTitle,
    mainTitleSetting,
    mainMsg,
    mainMsgSetting,
    mainQrSetting,
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
    };
  },

  methods: {
    afterHoverDelete() {
      this.settingComponentName = "";
    },
    afterHoverClick(componentName) {
      this.settingComponentName = componentName;
    },
    afterHoverBlur() {
      this.settingComponentName = "";
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