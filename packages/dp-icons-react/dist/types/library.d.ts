export interface IconType {
    name: string;
    key: string;
    type: string;
    width: number;
    height: number;
    attributes: any;
    svgPathData: string[];
}
declare class Library {
    private store;
    constructor();
    add(icon: IconType): void;
    has(name: string): boolean;
    get(name: string, type?: string): IconType | undefined;
}
declare const _default: Library;
export default _default;
