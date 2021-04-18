<template>
  <transition v-on="on">
    <div v-if="visible" class="collapse">
      <slot></slot>
      <div @click="$emit('collapse')" class="collapse-button el-icon-d-arrow-left"></div>
    </div>
  </transition>
</template>
<script>
import { defineComponent } from "vue";

const addClass = (el, className) => {
  el.classList.add(className);
};
const removeClass = (el, className) => {
  el.classList.remove(className);
};
export default defineComponent({
  props: {
    visible: Boolean,
  },
  emits:['collapse'],
  setup() {
    return {
      on: {
        beforeEnter(el) {
          addClass(el, "horizontal-collapse-transition");
          if (!el.dataset) el.dataset = {};
          el.dataset.oldPaddingLeft = el.style.paddingLeft;
          el.dataset.oldPaddingRight = el.style.paddingRight;
          el.style.width = "0";
          el.style.paddingLeft = 0;
          el.style.paddingRight = 0;
        },
        enter(el) {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.scrollWidth !== 0) {
            el.style.width = el.scrollWidth + "px";
            el.style.paddingLeft = el.dataset.oldPaddingLeft;
            el.style.paddingRight = el.dataset.oldPaddingRight;
          } else {
            el.style.width = "";
            el.style.paddingLeft = el.dataset.oldPaddingLeft;
            el.style.paddingRight = el.dataset.oldPaddingRight;
          }
          el.style.overflow = "hidden";
        },
        afterEnter(el) {
          removeClass(el, "horizontal-collapse-transition");
          el.style.width = "";
          el.style.overflow = el.dataset.oldOverflow;
        },
        beforeLeave(el) {
          if (!el.dataset) el.dataset = {};
          el.dataset.oldPaddingLeft = el.style.paddingLeft;
          el.dataset.oldPaddingRight = el.style.paddingRight;
          el.dataset.oldOverflow = el.style.overflow;
          el.style.width = el.scrollWidth + "px";
          el.style.overflow = "hidden";
        },
        leave(el) {
          if (el.scrollWidth !== 0) {
            addClass(el, "horizontal-collapse-transition");
            el.style.transitionProperty = "width";
            el.style.width = 0;
            el.style.paddingLeft = 0;
            el.style.paddingRight = 0;
          }
        },
        afterLeave(el) {
          removeClass(el, "horizontal-collapse-transition");
          el.style.width = "";
          el.style.overflow = el.dataset.oldOverflow;
          el.style.paddingLeft = el.dataset.oldPaddingLeft;
          el.style.paddingRight = el.dataset.oldPaddingRight;
        },
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.collapse-button{
  width: 10px;
  height: 100%;
  background: #2a2a2a;
  position: absolute;
  top: 0;
  left: 100%;
  color: #909399;
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  &:hover{
    background: #333333;
    color: #a6a9ad;
  }
  &:before{
    transform: translateX(-1px) scale(0.8);
  }
}
</style>