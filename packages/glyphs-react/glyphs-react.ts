import {createElement, FC, SVGProps} from "react";
import {IGlyphProps} from "./iconType";

const reactifyAttributes = (attrs: any) => {
    if (!attrs) return {};

    return Object.keys(attrs).reduce((acc, key) => {
        const leKey = key.split('-')
            .map((x, index) => index !== 0
                ? x.charAt(0).toUpperCase() + x.substring(1)
                : x)
            .join('')
        acc[leKey] = attrs[key]
        return acc
    }, {} as any)
}

const remToPx = (val: string) => {
    return parseFloat(val) * (typeof getComputedStyle === 'function' ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16)
}
const sizeCalculate = (value: string) => {
    return (value.slice(-1) === 'x' ? remToPx(value.slice(0, value.length - 1)) : parseInt(value)) + 'px'
}
const Glyph: FC<IGlyphProps & SVGProps<SVGSVGElement>> = (
    {
        icon,
        size = '1.5x',
        width,
        height,
        fill,
        stroke,
        ...props
    }
) => {
    const calculatedSize = sizeCalculate(size)

    return createElement('svg', {
            viewBox: `0 0 ${icon.width} ${icon.height}`,
            width: width ?? calculatedSize,
            height: height ?? calculatedSize, ...props
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
}

export default Glyph