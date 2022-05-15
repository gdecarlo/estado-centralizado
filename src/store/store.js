import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    _count: 0,
  }),
  actions: {
    /**
     * Se incrementa en uno el contador
     */
    add() {
      this._count++;
    },
  },
  getters: {
    /**
     * @param {object} state
     * @returns {number} - El contador
     */
    count(state) {
      return state._count;
    },
    /**
     * @returns {number} resultado - El contador multiplicado por 2
     */
    doubleCount() {
      return this.count * 2;
    },
  },
});
