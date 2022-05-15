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
      return state._count;
    },
    doubeCount() {
      return this.count * 2;
    },
  },
});
