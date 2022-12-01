import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import "vue3-easy-data-table/dist/style.css";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";

createApp(App).use(router).use(store).mount('#app')
