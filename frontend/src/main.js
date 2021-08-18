import Vue from 'vue'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';



import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/app.scss'

Vue.use(BootstrapVue)

// Vue.config.productionTip = false
createApp(App).use(router).mount('#app')
