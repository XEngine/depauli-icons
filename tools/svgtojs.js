const {optimize} = require('svgo');
const {parseSync} = require('svgson')
const svgSlim = require('svg-slim');
const convertCssStringToJsObject = require("./csstojs");
const {inspect} = require("util");

module.exports = async (name, componentName, content, iconPackage, iconPackageName) => {
    let test = await svgSlim(content, {
        "rules": {
            'apply-style': false,
            'combine-path': [false],
            'shorten-style-attr': false
        },
    })

    let svg = optimize(test, {
        multipass: false,
        plugins: [
            'removeTitle',
            'removeDesc',
            /*{
                name: 'convertShapeToPath',
                active: true,
                params: {
                    convertArcs: true,
                }
            },*/
            'convertPathData',
            //css,
            //customConvertShapeToPath,
            //'mergePaths',
        ]
    }).data;

    const svgAst = parseSync(svg)

    let style = convertCssStringToJsObject(svgAst.children.find(child => child.name === 'style')?.children[0].value)
    const sanitize = (path) => {
        const out = {...path}

        delete out.type
        delete out.value
        delete out.parent

        if (path.attributes.class) {
            const styleMatch = style[path.attributes.class]
            delete out.attributes.class

            if (styleMatch) {
                out.attributes = {...out.attributes, ...styleMatch}
            }
        }

        if (out.attributes.fill && out.attributes.fill !== 'none') {
            out.attributes.fill = 'currentColor'
        }

        if (out.attributes.stroke && out.attributes.stroke !== 'none') {
            out.attributes.stroke = 'currentColor'
        }


        return out
    }

    const paths = svgAst.children.filter(x => x.name !== 'style').map(path => {
        const _path = sanitize({...path})
        if (_path.children.length) {
            _path.children = _path.children.filter(x => x.name !== 'style').map(child => sanitize({...child}))
        }

        return _path
    })

    const viewBox = svgAst.attributes.viewBox?.split(',') || [0, 0, 24, 24]

    return `import {IconType} from "../iconType";

export const ${componentName}${iconPackageName}: IconType = {
    name: '${name}',
    key: '${componentName}',
    type: '${iconPackage.name}',
    width: ${svgAst.attributes.width || viewBox[2]},
    height: ${svgAst.attributes.height || viewBox[3]},
    viewBox: '${viewBox.join(' ')}',
    svgPathData: ${JSON.stringify(paths)},
}
`
}
