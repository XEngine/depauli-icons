import Library from './library'
import Component from './dp-icon.vue'

export * from './icons.js'

const DPIcon = {
    install(Vue) {
        Vue.component('dp-icon', Component)
    }
};

export default DPIcon
export {
    Library
}