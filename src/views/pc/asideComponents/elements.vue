<template>
  <el-space
    direction="vertical"
    alignment="stretch"
    :size="20"
    class="elements-container"
  >
    <el-row
      v-for="(elementSwitch, index) in elementSwitchList"
      :key="index"
      type="flex"
      align="middle"
      :gutter="60"
    >
      <el-col :span="10" style="text-align:right">{{ elementSwitch.label }}</el-col>
      <el-col :span="14">
        <el-switch
          v-model="PC.aside.elements[elementSwitch.property]"
          active-value="Y"
          inactive-value="N"
          active-text="ON"
          inactive-text="OFF"
          :width="50"
        ></el-switch>
      </el-col>
    </el-row>
  </el-space>
</template>

<script>
import { defineComponent } from "vue";
import { ElemetsSwitchClass } from "@/scripts";
export default defineComponent({
  setup() {
    const elementSwitchList = [
      new ElemetsSwitchClass("居中标题", "a"),
      new ElemetsSwitchClass("左上角logo", "b"),
      new ElemetsSwitchClass("右上消息条数", "c"),
      new ElemetsSwitchClass("右上角二维码", "d"),
      new ElemetsSwitchClass("滚动消息条", "e"),
      new ElemetsSwitchClass("底部版权信息", "f"),
    ];
    return {
      elementSwitchList,
    };
  },
  methods: {
    print() {
      console.log(this.PC.aside.elements);
    },
  },
});
</script>

<style lang="scss" scoped>
.elements-container {
  color: #ffffff;
}
</style>