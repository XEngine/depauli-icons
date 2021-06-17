import Library from './library'
import DPIcon from './dp-icon.vue'

export * from './icons.js'

const install = function installDpicons(Vue) {
    Vue.component('dp-icon', DPIcon);
};

export {
    install,
    Library
}