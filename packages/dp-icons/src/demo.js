import {createApp} from 'vue'
import Demo from './demo.vue'
import DPIcons, {ArrowDown, Library} from './index.js'

Library.add(ArrowDown)

const app = createApp(Demo)
app.use(DPIcons)

app.mount('#app')
