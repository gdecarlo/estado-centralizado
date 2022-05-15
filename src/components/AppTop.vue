<template>
  <div>
    <h1>Top</h1>
    <h3>Counter: {{ count }}</h3>
    <h3>Double Counter: {{ doubeCount }}</h3>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from "../store/store";

export default {
  computed: {
    ...mapState(useStore, ["count", "doubeCount"]),
  },
};
</script>

<style></style>
