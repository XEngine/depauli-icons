export type SvgPathDataType = {
    name: string
    attributes: any
    children: SvgPathDataType[]
}
export type IconType = {
    name: string
    key: string
    type: string
    width: number
    height: number
    viewBox: string,
    svgPathData: SvgPathDataType[]
}

export interface IGlyphProps {
    icon: IconType
    type?: string
    size?: string
    width?: number
    height?: number
    fill?: string
    stroke?: string
}