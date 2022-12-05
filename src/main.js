import Vue from 'vue'
import App from './App.vue'
import zircle from 'zircle'
import 'zircle/dist/zircle.css'
import VueKnobControl from 'vue-knob-control'


Vue.use(zircle)
Vue.config.productionTip = false
Vue.use(VueKnobControl)
Vue.component('knob-control', VueKnobControl)
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(solid)
library.add(regular)
library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


new Vue({
  render: h => h(App)
}).$mount('#app')
