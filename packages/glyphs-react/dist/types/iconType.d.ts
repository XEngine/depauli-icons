export declare type IconType = {
    name: string;
    key: string;
    type: string;
    width: number;
    height: number;
    attributes: any;
    svgPathData: string[];
};
export interface IGlyphProps {
    icon: IconType;
    type?: string;
    size?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}
