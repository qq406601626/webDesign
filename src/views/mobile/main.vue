<template>
  <!-- <collapse
    :visible="!!currentSelectModule.asideModule.component"
    class="aside-content-wrap"
  > -->
  <el-row type="flex" style="height: 100%">
    <collapse :visible="show" class="aside-content-wrap">
      <template #default>
        <transition name="el-fade-in-linear" mode="out-in">
          <!-- <component
          :is="currentSelectModule.asideModule.component"
          class="aside-content-component"
        ></component> -->
          <div style="height: 200px; background: red; width: 400px">
            11111111111111
          </div>
        </transition>
      </template>
      <!-- <template #collapse-button>
        <div
          @click="currentSelectModule.asideModule = originSelectModule"
          class="collapse-button el-icon-d-arrow-left"
        ></div>
      </template> -->
    </collapse>
    <el-row type="flex" justify="center" style="height: 100%; flex-grow: 1">
      <div style="width: 200px; height: 600px; background: green">1111111</div>
      <el-button @click="show2 = !show2">click</el-button>
    </el-row>
    <collapse :visible="show2">
      <template #default>
        <transition name="el-fade-in-linear" mode="out-in">
          <!-- <component
          :is="currentSelectModule.asideModule.component"
          class="aside-content-component"
        ></component> -->
          <div style="height: 200px; background: red; width: 400px">
            11111111111111
          </div>
        </transition>
      </template>
      <!-- <template #collapse-button>
        <div
          @click="currentSelectModule.asideModule = originSelectModule"
          class="collapse-button el-icon-d-arrow-left"
        ></div>
      </template> -->
    </collapse>
  </el-row>
</template>

<script>
import { defineComponent, ref } from "vue";
import Collapse from "@/components/collapse.vue";
import { originSelectModule, currentSelectModule, show } from "./state";

export default defineComponent({
  components: { Collapse },
  setup() {
    const show2 = ref(false);
    return {
      originSelectModule,
      currentSelectModule,
      show,
      show2
    };
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.mobile-main-wrap {
  height: 100%;
}
</style>