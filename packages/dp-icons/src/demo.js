import {createApp} from 'vue'
import Demo from './demo.vue'
import DPIcons, {Library} from './index.js'
import Bin1 from '../../dp-icons-regular/icons/Bin1.js'
import ArrowRight from '../../dp-icons-bold/icons/ArrowRight.js'

Library.add(Bin1)
Library.add(ArrowRight)

const app = createApp(Demo)
app.use(DPIcons)
app.mount('#app')
