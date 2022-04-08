const {optimize} = require('svgo');
const customConvertShapeToPath = require('./convertShapeToPath.js');
const mergePath = require('./merge.js');
const {parseSync} = require('svgson')
const svgSlim = require('svg-slim');

module.exports = async (name, componentName, content) => {

    let test = await svgSlim(content, {
        "rules": {
            'apply-style': false,
        },
    })

    let svg = optimize(test, {
        plugins: [
            'removeTitle',
            'removeDesc',
            {
                name: 'convertShapeToPath',
                active: true,
                params: {
                    convertArcs: true
                }
            },
            //css,
            customConvertShapeToPath,
            mergePath,
        ]
    }).data;
    const svgAst = parseSync(svg)

    const path = svgAst.children.find(child => child.name === 'path').attributes.d
    let style = svgAst.children.find(child => child.name === 'style')?.children[0].value
    if (style) {
        style = style.replace(/#000/g, 'currentColor').match(/{(.*?)}/)[1]
        style = style.split(';').filter(x => x).reduce((acc, rule) => {
            const [key, value] = rule.split(':')
            acc[key.trim()] = value.trim()
            return acc
        }, {})
    }

    return `export default {
    name: '${name}',
    key: '${componentName}',
    width: 24,
    height: 24,
    attributes: ${JSON.stringify(style)},
    svgPathData: '${path}',
}
`
}
