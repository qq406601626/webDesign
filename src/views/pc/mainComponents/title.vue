<template>
  <div class="title-container" v-show="PC.main.title.show">
    <img :src="PC.main.title.brand" alt="" class="title-brand" v-show="PC.main.title.brand">
    <div
        class="title-text"
        :style="{
           color:PC.main.title.fontColor,
           fontSize:`${PC.main.title.fontSize}px`,
           fontBolder: PC.main.title.fontBolder?'bolder':'normal'
         }">
      {{ PC.main.title.text }}
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({});
</script>

<style lang="scss" scoped>
.title-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  color: #ffffff;
}

</style>