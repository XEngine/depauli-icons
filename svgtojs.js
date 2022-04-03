const {optimize} = require('svgo');
const customConvertShapeToPath = require('./utils/convertShapeToPath.js');
const mergePath = require('./utils/merge.js');
const {parseSync} = require('svgson')

module.exports = (name, componentName, content) => {
    let svg = optimize(content, {
        plugins: [
            {
                name: 'convertShapeToPath',
                active: true,
                params: {
                    convertArcs: true
                }
            },
            'collapseGroups',
            customConvertShapeToPath,
            mergePath,
            'removeTitle',
            'removeDesc'
        ]
    }).data;

    const svgAst = parseSync(svg)
    console.log(svg, svgAst)
    const path = svgAst.children.find(child => child.name === 'path').attributes.d
    let style = svgAst.children.find(child => child.name === 'defs')?.children.find(child => child.name === 'style')?.children[0].value
    if (style) {
        style = style.replace(/#000/g, 'currentColor').match(/{(.*?)}/)[1]
        style = style.split(';').filter(x => x).reduce((acc, rule) => {
            const [key, value] = rule.split(':')
            acc[key.trim()] = value.trim()
            return acc
        }, {})
    }

    return `
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const iconName = '${componentName}';
const width = 24;
const height = 24;
const attributes = ${JSON.stringify(style)};
const svgPathData = '${path}';

exports.definition = {
  iconName: iconName,
  icon: [
    width,
    height,
    svgPathData
  ]
};

exports.iconName = iconName;
exports.attributes = attributes;
exports.width = width;
exports.height = height;
exports.svgPathData = svgPathData;
    `
}
