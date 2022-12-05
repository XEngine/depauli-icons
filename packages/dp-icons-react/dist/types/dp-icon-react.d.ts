import { FC, SVGProps } from "react";
export interface IDPIconProps {
    icon: string;
    type?: string;
    size?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}
export declare const reactifyAttributes: (attrs: any) => any;
export declare const sizeCalculate: (value: string) => string;
export declare const DpIcon: FC<IDPIconProps & SVGProps<SVGSVGElement>>;
