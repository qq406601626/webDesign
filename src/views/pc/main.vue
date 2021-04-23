<template>
  <div v-domHover:[{afterDelete,afterClick}].noShade style="width:200px;height:200px;background:red">11111111</div>
  <main-title v-domHover:[{afterDelete,afterClick}].noShade></main-title>
  <el-button @click="show = !show">change</el-button>
  <collapse :visible="show" class="main-setting-content-wrap">
    <template #default>
      <component
        is="mainMsgSetting"
        class="main-setting-content-component"
      ></component>
    </template>
    <template #collapse-button>
      <div class="collapse-button el-icon-d-arrow-right"></div>
    </template>
  </collapse>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
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
    const showCollapse = ref(false);
    return {
      showCollapse,
    };
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    afterDelete() {
      console.log("afterDelete");
    },
    afterClick() {
      console.log("afterClick");
    },
  },
  mounted() {
    setTimeout(() => {
      this.width = "200px";
      this.height = "200px";
    }, 5000);
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