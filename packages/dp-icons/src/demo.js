import Vue from 'vue'
import Demo from './demo.vue'
import DPIcons, {Library} from './index.js'
import Bin1 from '../../dp-icons-light/icons/Bin1.js'

Library.add(Bin1)

Vue.use(DPIcons)
const app = new Vue({
    render: h => h(Demo)
}).$mount('#app')
