<template>
  <div>
    <h1>Top</h1>
    <h3>Counter: {{ store.count }}</h3>
    <h3>Double Counter: {{ store.doubleCount }}</h3>
    <h3>Cuadruple Counter: {{ cuadrupleCount }}</h3>
  </div>
</template>

<script>
import { useStore } from "../store/store";

export default {
  setup() {
    const store = useStore();
    return { store };
  },
  computed: {
    cuadrupleCount() {
      return this.store.doubleCount * 2;
    },
  },
};
</script>

<style></style>
