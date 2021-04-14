<template>
  <el-space
    direction="vertical"
    :size="10"
    :spacer="spacer"
    class="pc-aside-container"
    alignment="stretch"
    style="width: 100%"
  >
    <slot></slot>
  </el-space>
</template>

<script>
import { defineComponent ,h} from "vue";

export default defineComponent({
  setup() {
    const spacer = h("div", {
      style: {
        width: "30px",
        height: "1px",
        background: "hsla(0, 0%, 100%, .45)",
        marginLeft: "33px",
      },
    });
    return {
      spacer,
    };
  },
});
</script>
