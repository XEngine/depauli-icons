import {h, ref, watch, defineComponent} from 'vue'
import {IconType} from "../iconType";
export const DpIcon = defineComponent({
    props: {
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: '1.5x'
        },
        type: {
            type: String,
            default: 'regular'
        }
    },
    setup(props, context) {
        const theIcon = ref<IconType | undefined>()

        let size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'rem' : parseInt(props.size) + 'px';
        let attrs = {
            width: context.attrs.width || size,
            height: context.attrs.height || size,
        };

        return () => {
            if (!theIcon.value) {
                return h('span')
            }

            return h('svg', {
                viewBox: '0 0 24 24',
                ...attrs,
            }, [props.icon, h('g', {...theIcon.value.attributes ?? {}}, [...theIcon.value.svgPathData.map(x => {
                return h('path', {d: x})
            })])])
        }
    }
})
