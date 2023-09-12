import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueAxios from 'vue-axios'
import axios from "axios";

createApp(App).use(store).use(VueAxios, axios).mount('#app')
