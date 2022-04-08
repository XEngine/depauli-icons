import Library from './library'

export default {
    functional: true,
    props: {
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: '24px'
        }
    },
    render(createElement, {props, data}) {
        let svg = Library.get(props.icon)

        if(!svg) {
            return createElement('span')
        }

        let size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'rem' : parseInt(props.size) + 'px';
        let attrs = {
            width: data.attrs.width || size,
            height: data.attrs.height || size,
        };

        return createElement(
            'svg', {
                class: props.size,
                attrs: {
                    viewBox: '0 0 24 24',
                    ...attrs
                }
            }, [
                createElement('path', {
                    attrs: {
                        'd': `${svg.svgPathData}`
                    }
                })
            ]
        );
    }
};


