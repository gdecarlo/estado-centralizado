<template>
  <div>
    <button @click="add">Add</button>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useStore } from "../store/store";
export default {
  methods: {
    ...mapActions(useStore, ["add"]),
  },
};
</script>

<style></style>
