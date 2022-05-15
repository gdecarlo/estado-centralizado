import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    _count: 0,
  }),
  actions: {
    add() {
      console.log("action add..");
      this._count++;
    },
  },
  getters: {
    count(state) {
      console.log("getter", state._count);
      return state._count;
    },
  },
});
