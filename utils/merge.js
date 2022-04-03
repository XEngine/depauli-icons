const {stringifyPathData} = require('svgo/lib/path.js');
const {detachNodeFromParent} = require('svgo/lib/xast.js');
const JSAPI = require('svgo/lib/svgo/jsAPI.js');

module.exports = {
    name: 'mergePath',
    type: 'visitor',
    fn: (root, params) => {
        const pathArray = []
        return {
            element: {
                enter: (node, parentNode) => {
                    let prevPathElement = null;

                    for (let currentPathElement of node.children) {
                        if (currentPathElement.name !== 'path') {
                            continue;
                        }

                        if(prevPathElement == null){
                            prevPathElement = currentPathElement
                            continue;
                        }

                        prevPathElement.attributes.d = prevPathElement.attributes.d + ' ' + currentPathElement.attributes.d
                        detachNodeFromParent(currentPathElement, node)
                        //2. ve sonraki elementlerdeyiz.

                    }
                },
            }
        }
    }
}
