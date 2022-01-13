const { optimize } = require('svgo');

module.exports = (name, componentName, content) => {
    const svg = optimize(content, {
        multipass: false,
        plugins: [
            {
                name: 'removeViewBox',
                active: false
            }
        ]
    }).data;
    console.log(componentName);

    return  `
import { defineComponent } from 'vue'

const ${componentName} = defineComponent({
    name: '${name}',
    setup(props, {attrs}) {
        const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';

        const properties = {}
        properties.width = attrs.width || size
        properties.height = attrs.height || size

        return () => ${svg.replace(/<svg([^>]+)>/, "<svg$1 {...properties}>")}
    },
    props: {
        size: {
            type: String,
            default: '24',
            validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x')
        }
    }
})

export default ${componentName}
    `.trim();
};
