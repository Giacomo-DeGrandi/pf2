import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueWaypoint from "vue-waypoint";

require("@/assets/css/main.css");

const pinia = createPinia();

createApp(App).use(router, pinia, VueWaypoint).mount("#app");
