<template>
  <router-view></router-view>
</template>

<script >
/*import HelloWorld from './components/HelloWorld.vue'
This starter template is using Vue 3 experimental <script setup> SFCs
Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md*/
export default {
  components: {},
  computed: {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
body {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 12px hsl(0deg 0% 100% / 80%);
}

::-webkit-scrollbar-track-piece {
  background-color: #333;
}
</style>
