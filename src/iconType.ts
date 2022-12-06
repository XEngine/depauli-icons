export type IconType = {
    name: string
    key: string
    type: string
    width: number
    height: number
    attributes: any
    svgPathData: string[]
}

export interface IDPIconProps {
    icon: IconType
    type?: string
    size?: string
    width?: number
    height?: number
    fill?: string
    stroke?: string
}