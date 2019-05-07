import Vue from 'vue';
import App from './App.vue';

//------------- Views ---------------
import VotePage from './views/VotePage.vue';
Vue.component('vote-page', VotePage);

//---------- Components -------------
import Dish from './components/Dish.vue';
Vue.component('dish', Dish);

// -------------- SVGS --------------
import ThumbSVG from './components/svgs/ThumbSVG.vue';
Vue.component('thumb-svg', ThumbSVG);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
