const {stringifyPathData} = require('svgo/lib/path.js');
const {detachNodeFromParent} = require('svgo/lib/xast.js');
const css = require('css');

module.exports = {
    name: 'css',
    type: 'visitor',
    fn: (root, params) => {
        const style = {}
        return {
            element: {
                enter: (node, parentNode) => {
                    let prevPathElement = null;

                    if (node.name === 'style') {
                        const style = node.children.find(x => x.type === 'text').value
                        const parse = css.parse(style)

                        Object.assign(style, parse.stylesheet.rules)
                    }
                },
            }
        }
    }
}
