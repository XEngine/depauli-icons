import Library from './library'
import {useEffect, useRef} from "react";

const DpIcon = ({icon = '', type = 'regular', size = '1.5x', width, height, className}) => {
    const theIcon = useRef(null)

    useEffect(() => {
        theIcon.current = Library.get(icon, type)
    }, [icon, type])

    //immediate true amk
    theIcon.current = Library.get(icon, type)

    let theSize = size.slice(-1) === 'x' ? size.slice(0, size.length - 1) + 'rem' : parseInt(size) + 'px';

    let attrs = {
        width: width || theSize,
        height: height || theSize,
    };

    const reactifyAttributes = (attrs) => {
        return Object.keys(attrs).reduce((acc, key) => {
            const leKey = key.split('-')
                .map((x, index) => index !== 0
                    ? x.charAt(0).toUpperCase() + x.substring(1)
                    : x)
                .join('')
            acc[leKey] = attrs[key]
            return acc
        }, {})
    }

    return (
        <>
            {
                !theIcon.current
                    ? <span></span>
                    : <svg viewBox='0 0 24 24' width={attrs.width} height={attrs.height} className={className}>
                        <g {...reactifyAttributes(theIcon.current.attributes) ?? {}}>
                            {theIcon.current.svgPathData.map((path, index) => (<path key={theIcon.current.name + index} d={path}/>))}
                        </g>
                    </svg>
            }
        </>
    )
}
export default DpIcon