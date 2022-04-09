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
            default: '1.5x'
        }
    },
    render(createElement, {props, data}) {
        let svg = Library.get(props.icon)

        if (!svg) {
            return createElement('span')
        }

        let size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'rem' : parseInt(props.size) + 'px';
        let attrs = {
            width: data.attrs.width || size,
            height: data.attrs.height || size,
        };

        return createElement(
            'svg', {
                attrs: {
                    viewBox: '0 0 24 24',
                    ...attrs
                }
            }, [
                createElement('g', {attrs: {...svg.attributes ?? {}}}, [...svg.svgPathData.map(x => {
                    return createElement('path', {
                        attrs: {
                            d: x,
                        }
                    })
                })])
            ]
        );
    }
};


