<template>
  <div>
    <button @click="add">Add</button>
  </div>
</template>

<script>
import { useStore } from "@/store/store";

export default {
  setup() {
    const store = useStore();
    const add = () => store.add();
    return { store, add };
  },
};
</script>

<style></style>
