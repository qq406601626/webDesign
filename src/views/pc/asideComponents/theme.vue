<template>
  <el-row style="flex-wrap: nowrap;">
    <div class="box box1">11111111111q</div>
    <div class="box box2">22222222222w</div>
  </el-row>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  methods: {}
});
</script>

<style lang="scss" scoped>

.box {
  width: 200px;
  height: 200px;
  flex-shrink: 0;

  &.box1 {
    background: red;
  }

  &.box2 {
    background: #42b983;
  }
}

</style>