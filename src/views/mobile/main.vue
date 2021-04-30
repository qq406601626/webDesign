<template>
  <el-row type="flex" style="height: 100%">
    <!--    <collapse :visible="show" class="aside-content-wrap">
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
        </collapse>-->
    <el-row type="flex" justify="center" align="middle" style="height: 100%; flex-grow: 1">
      <div class="phone-coat" v-aspectRatio="9/16">
        <!--<main-content ></main-content>-->
      </div>
    </el-row>
    <!--    <collapse :visible="show2">
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
        </collapse>-->
  </el-row>
</template>

<script>
import {defineComponent} from "vue";
import Collapse from "@/components/collapse.vue";
import MainContent from './mainComponents/content.vue'
import {originSelectModule, currentSelectModule} from "./state";

export default defineComponent({
  components: {Collapse, MainContent},
  setup() {
    return {
      originSelectModule,
      currentSelectModule,
    };
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.phone-coat {
  width: 375px;
  background: linear-gradient(180deg, #282828, #282828);
  padding: 40px 20px 50px;
  position: relative;
  box-shadow: 0 16px 50px 0 rgb(0 0 0 / 4%), 0 9px 35px 0 transparent, 0 -6px 15px 0 rgb(0 0 0 / 5%);
  border-radius: 20px;
  box-sizing: border-box;

  &:after {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #4a4a4a;
    background: #1f1f1f;
    position: absolute;
    left: 50%;
    margin-left: -15px;
    bottom: 10px;
    border-radius: 100%;
  }
}
</style>