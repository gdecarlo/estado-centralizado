import Vue from "vue";
import App from "./App.vue";
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.config.productionTip = false;

const pinia = createPinia();
Vue.use(PiniaVuePlugin);

new Vue({
  render: (h) => h(App),
  pinia,
}).$mount("#app");
