<template>
  <el-button @click="change">change</el-button>
    <div style="width:200px;height:200px;background:red" v-loading="true">
      11111111111111111111111
    </div>
  <div v-domHover class="aaaaaaa" style="width:200px;height:200px;background:red" >
    aaaaaaaaaaaaaaaaa
  </div>
  <collapse :visible="show" class="aside-content-wrap">
    <template #default>
      <!-- <component
        :is="currentSelectModule.asideModule.component"
        class="aside-content-component"
      ></component> -->
      <div class="aside-content-component">111111111111111</div>
    </template>
    <template #collapse-button>
      <div class="collapse-button el-icon-d-arrow-right"></div>
    </template>
  </collapse>
</template>

<script>
import { defineComponent, ref } from "vue";
import Collapse from "@/components/collapse.vue";
export default defineComponent({
  components: {
    Collapse,
  },
  setup() {
    const show = ref(false);
    return {
      show,
    };
  },
  methods: {
    change() {
      this.show = !this.show;
    },
  },
});
</script>

<style lang="scss" scoped>
.aside-content-wrap {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin-left: 1px;
  z-index: 2;
  background: rgb(62, 63, 65);

  .aside-content-component {
    width: 440px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
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