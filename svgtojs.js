const {optimize} = require('svgo');
const customConvertShapeToPath = require('./utils/convertShapeToPath.js');
const mergePath = require('./utils/merge.js');
const removeGroups = require('./utils/removeGroups.js');
const {parseSync} = require('svgson')
const svgSlim = require('svg-slim');

module.exports = async (name, componentName, content) => {

    const test = await svgSlim(content, {
        "rules": {
            "shorten-class": true,
            "shorten-shape": true,
            "collapse-g": true,
            "combine-transform": true,
        },
        "browsers": ["> 1%", "not ie 11", "not firefox < 99"]
    })

    console.log(test)

    return
    let svg = optimize(content, {
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
            removeGroups,
            customConvertShapeToPath,
            mergePath,
        ]
    }).data;

    const svgAst = parseSync(svg)
    //console.log(svg, svgAst)
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
