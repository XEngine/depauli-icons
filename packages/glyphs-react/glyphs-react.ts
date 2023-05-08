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
            viewBox: '0 0 24 24',
            width: width ?? calculatedSize,
            height: height ?? calculatedSize, ...props
        },
        createElement('g', {
                ...reactifyAttributes(icon.attributes),
                stroke: stroke || icon.attributes && icon.attributes?.stroke,
                fill: fill || icon.attributes && icon.attributes?.fill
            },
            icon.svgPathData.map((path, index) => createElement('path', {key: index, d: path}))
        )
    )
}

export default Glyph