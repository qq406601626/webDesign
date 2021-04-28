<template>
  <collapse
      :visible="!!currentSelectModule.asideModule.component"
      class="aside-content-wrap"
  >
    <template #default>
      <transition name="el-fade-in-linear" mode="out-in">
        <component
            :is="currentSelectModule.asideModule.component"
            class="aside-content-component"
        ></component>
      </transition>
    </template>
    <template #collapse-button>
      <div
          @click="currentSelectModule.asideModule = originSelectModule"
          class="collapse-button el-icon-d-arrow-left"
      ></div>
    </template>
  </collapse>
</template>

<script>
import {defineComponent} from "vue";


export default defineComponent({
  components: {},
  setup() {
    return {};
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>

</style>