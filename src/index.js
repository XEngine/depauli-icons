import Library from './library'
import Component from './dp-icon.vue'

export * from './icons.js'

const DPIcon = {
    install(app) {
        app.component('dp-icon', Component)
    }
};

export {
    DPIcon as default,
    Library
}