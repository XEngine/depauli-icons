import {createElement} from "react";
import {reactifyAttributes, sizeCalculate} from "./utils.js";

const GlyphSVGRenderer = ({
                              icon,
                              size = '1.5x',
                              width,
                              height,
                              fill,
                              stroke,
                              ...props
                          }) => {
    const calculatedSize = sizeCalculate(size)

    return (
        createElement('svg', {
                viewBox: `0 0 ${icon.width} ${icon.height}`,
                width: width ?? calculatedSize,
                height: height ?? calculatedSize,
                ...props
            },
            icon.svgPathData.map((path, index) => {
                return createElement(path.name, {
                        ...reactifyAttributes(path.attributes),
                        key: index
                    },
                    path.children.map((childPath, childIndex) => createElement(childPath.name, {
                        ...reactifyAttributes(childPath.attributes),
                        key: childIndex * 2
                    }))
                )
            })
        )
    )
}

export default GlyphSVGRenderer