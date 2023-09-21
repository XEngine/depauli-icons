import { HTMLAttributes } from 'react';
import { ReactNode } from 'react';

declare const Glyph: ({ icon, size, width, height, fill, stroke, ...props }: IGlyphProps & HTMLAttributes<HTMLOrSVGElement>) => ReactNode;
export default Glyph;

declare type IconType = {
    name: string;
    key: string;
    type: string;
    width: number;
    height: number;
    viewBox: string;
    svgPathData: SvgPathDataType[];
};

declare interface IGlyphProps {
    icon: IconType;
    type?: string;
    size?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

declare type SvgPathDataType = {
    name: string;
    attributes: any;
    children: SvgPathDataType[];
};

export { }
