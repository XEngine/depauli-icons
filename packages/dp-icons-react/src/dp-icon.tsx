import Library, {IconType} from './library'
import {createElement, FC, HTMLAttributes, ReactSVGElement, SVGProps} from "react";

export interface IDPIconProps {
    icon: string
    type?: string
    size?: string
    width?: number
    height?: number
    fill?: string
    stroke?: string
}

interface IIconComponent extends Omit<IDPIconProps, 'icon'> {
    icon: IconType
}

export const reactifyAttributes = (attrs: any) => {
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

export const sizeCalculate = (value: string) => {
    return value.slice(-1) === 'x' ? value.slice(0, value.length - 1) + 'rem' : parseInt(value) + 'px'
}
const IconComponent = ({
                           icon,
                           size = '1.5x',
                           width,
                           height,
                           fill,
                           stroke,
                           ...props
                       }: IIconComponent): ReactSVGElement => {
    const calculatedSize = sizeCalculate(size)

    return createElement('svg', {
            viewBox: '0 0 24 24',
            width: width ?? calculatedSize,
            height: height ?? calculatedSize, ...props
        },
        createElement('g', {
                ...reactifyAttributes(icon.attributes),
                stroke: stroke || icon.attributes.stroke,
                fill: fill || icon.attributes.fill
            },
            icon.svgPathData.map((path, index) => createElement('path', {key: index, d: path}))
        )
    )
}

export const DpIcon: FC<IDPIconProps & SVGProps<SVGSVGElement>> = (props) => {
    const icon = Library.get(props.icon, props.type)
    return (icon ? createElement(IconComponent, {...props, icon: icon}) : <span>?</span>)
}
