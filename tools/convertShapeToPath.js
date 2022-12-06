const {stringifyPathData} = require('svgo/lib/path.js');
const {detachNodeFromParent} = require('svgo/lib/xast.js');

module.exports = {
    name: 'customConvertShapeToPath',
    type: 'visitor',
    fn: (root, params) => {
        const {precision} = params
        return {
            element: {
                enter: (node, parentNode) => {
                    if (
                        node.name === 'rect' &&
                        node.attributes.width != null &&
                        node.attributes.height != null
                    ) {
                        const x = Number(node.attributes.x || '0');
                        const y = Number(node.attributes.y || '0');
                        let rx = Number(node.attributes.rx) || 'auto';
                        let ry = Number(node.attributes.ry) || 'auto';
                        const width = Number(node.attributes.width);
                        const height = Number(node.attributes.height);

                        if (isNaN(x - y + width - height)) return;

                        if (rx === 'auto' && ry === 'auto') {
                            // If neither rx nor ry has a properly specified value, this is rectangle with square corners
                            rx = ry = 0
                        } else if ( ry === 'auto') {
                            // If ry missing, use value of rx
                            ry = rx
                        } else if ( rx === 'auto') {
                            // If rx missing, use value of ry
                            rx = ry
                        }
                        // If value of rx greater than half of width, reset to half of width.
                        // Do same for ry.
                        if (rx > width / 2) {
                            rx = width / 2
                        }
                        if (ry > height / 2) {
                            ry = height / 2
                        }

                        const hasCurves = rx > 0 && ry > 0

                        let pathData = [
                            { command: 'M', args: [x + rx, y] },
                            { command: 'H', args: [x + width - rx] },
                            hasCurves && { command: 'A', args: [rx, ry, 0, 0, 1, x + width, y + ry] },
                            { command: 'V', args: [y + height - ry] },
                            hasCurves && { command: 'A', args: [rx, ry, 0, 0, 1, x + width - rx, y + height] },
                            { command: 'H', args: [x + rx] },
                            hasCurves && { command: 'A', args: [rx, ry, 0, 0, 1, x, y + height - ry] },
                            hasCurves && { command: 'V', args: [y + ry] },
                            hasCurves && { command: 'A', args: [rx, ry, 0, 0, 1, x + rx, y ] },
                            { command: 'z', args: [] },
                        ];
                        // filter out null vallues
                        pathData = pathData.filter(val => !!val);

                        node.name = 'path';
                        node.attributes.d = stringifyPathData({pathData, precision});
                        delete node.attributes.x;
                        delete node.attributes.y;
                        delete node.attributes.rx;
                        delete node.attributes.ry;
                        delete node.attributes.width;
                        delete node.attributes.height;
                    }
                }
            }
        }
    }
}
