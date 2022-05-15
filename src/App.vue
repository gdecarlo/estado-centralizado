<template>
  <div id="app">
    <AppTop />
    <AppHome />
  </div>
</template>

<script>
import AppHome from "./components/AppHome.vue";
import AppTop from "./components/AppTop.vue";
export default {
  name: "App",
  components: {
    AppTop,
    AppHome,
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
