import Vue from 'vue'
import './tools/rem.js'
// import HelloWord from './src/components/HelloWord.vue'
// import HelloWord from './dist/main.js';
import quickSwiper from './src/index.js'
Vue.use(quickSwiper)
// Vue.component('hello-word',HelloWord)
new Vue({
    el:'#app',
})