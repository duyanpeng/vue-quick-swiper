import quickSwiper from './components/QuickSwiper.vue';
import quickSwiperItem from './components/QuickSwiperItem.vue'
export default {install:(Vue)=>{
    Vue.component('quickSwiper',quickSwiper)
    Vue.component('quickSwiperItem',quickSwiperItem)
}}