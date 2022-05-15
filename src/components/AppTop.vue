<template>
  <div>
    <h1>Top</h1>
    <h3>Counter: {{ count }}</h3>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from "../store/store";

export default {
  computed: {
    ...mapState(useStore, ["count"]),
  },
};
</script>

<style></style>
