<template>
  <div id="app">
    <AppTop />
    <AppHome />
  </div>
</template>

<script>
import AppHome from "./components/AppHome.vue";
import AppTop from "./components/AppTop.vue";
import { useStore } from "./store/store";
export default {
  name: "App",
  setup() {
    const store = useStore();
    return { store };
  },
  components: {
    AppTop,
    AppHome,
  },
  async created() {
    await this.store.setConfig();
    //await this.store.setStartCount();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
