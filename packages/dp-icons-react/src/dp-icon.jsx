import Library from './library'
import {createElement} from "react";
import {reactifyAttributes, sizeCalculate} from "./utils";

const DpIcon = (props) => {
    const icon = Library.get(props.icon, props.type)

    return (icon ? createElement(IconComponent, {...props, icon: icon}) : '?')
}

const IconComponent = ({icon, size = '1.5x', width, height, fill, stroke, ...props}) => {
    const calculatedSize = sizeCalculate(size)

    return createElement('svg', {viewBox: '0 0 24 24', width: width ?? calculatedSize, height: height ?? calculatedSize, ...props},
        createElement('g', {...reactifyAttributes(icon.attributes), stroke: stroke || icon.attributes.stroke, fill: fill || icon.attributes.fill},
            icon.svgPathData.map((path, index) => createElement('path', {key: index, d: path}))
        )
    )
}
export default DpIcon