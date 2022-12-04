import Vue from 'vue'
import App from './App.vue'
import zircle from 'zircle'
import 'zircle/dist/zircle.css'
import VueKnobControl from 'vue-knob-control'
Vue.use(zircle)
Vue.config.productionTip = false
Vue.use(VueKnobControl)
Vue.component('knob-control', VueKnobControl)

new Vue({
  render: h => h(App)
}).$mount('#app')
