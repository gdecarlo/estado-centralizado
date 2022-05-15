import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    _count: 0,
    _config: {},
  }),
  actions: {
    /**
     * Se incrementa en uno el contador
     */
    add() {
      this._count++;
    },
    async setStartCount() {
      this._count = this.config.start_count;
    },
    async setConfig() {
      const result = await fetch(
        "https://www.mockachino.com/139cfc28-736e-43/config"
      );

      this._config = await result.json();
      this._count = this._config.start_count;
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
    /**
     *
     * @returns {object}
     */
    getConfig() {
      return this._config;
    },
  },
});
