const {optimize} = require('svgo');
const customConvertShapeToPath = require('./convertShapeToPath.js');
const mergePath = require('./merge.js');
const {parseSync} = require('svgson')
const svgSlim = require('svg-slim');

module.exports = async (name, componentName, content, iconPackage) => {
    let test = await svgSlim(content, {
        "rules": {
            'apply-style': false,
        },
    })
    let svg = optimize(test, {
        multipass: true,
        plugins: [
            'removeTitle',
            'removeDesc',
            {
                name: 'convertShapeToPath',
                active: true,
                params: {
                    convertArcs: true,
                }
            },
            'convertPathData',
            //css,
            customConvertShapeToPath,
            'mergePaths',
        ]
    }).data;

    const svgAst = parseSync(svg)

    const paths = svgAst.children.filter(child => child.name === 'path')
    let style = svgAst.children.find(child => child.name === 'style')?.children[0].value
    if (style) {
        style = style.replace(/#000/g, 'currentColor').match(/{(.*?)}/)[1]
        style = style.split(';').filter(x => x).reduce((acc, rule) => {
            const [key, value] = rule.split(':')
            acc[key.trim()] = value.trim()
            return acc
        }, {})
    }else if(!style && iconPackage.package === 'dp-icons-bold'){
        style = {
            'fill': 'currentColor'
        }
    }


    return `import {IconType} from './iconTypeInterface';
 const ${componentName} : IconType = {
    name: '${name}',
    key: '${componentName}',
    type: '${iconPackage.name}',
    width: 24,
    height: 24,
    attributes: ${JSON.stringify(style)},
    svgPathData: ${JSON.stringify(paths.map(x => x.attributes.d))},
}
export default ${componentName}
`
}
