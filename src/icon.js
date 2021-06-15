export default {
    functional: true,
    name: 'dp-icon',
    props: {
        icon: {
            type: Object,
            required: true
        }
    },
    render: function (createElement, vm) {
        const { _c, _v, data, children = [] } = vm;

        return createElement(this.icon, {
            props: data
        })
    },
}
