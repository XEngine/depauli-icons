"use client";

import React, {
    useEffect,
    useRef,
    useState,
    HTMLAttributes,
    createElement,
    ReactNode
} from "react";
import {createPortal} from "react-dom";
import {IGlyphProps} from "../iconType";
import {reactifyAttributes, sizeCalculate} from "./utils";

const Glyph = ({
                   icon,
                   size = '1.5x',
                   width,
                   height,
                   fill,
                   stroke,
                   ...props
               }: IGlyphProps & HTMLAttributes<HTMLOrSVGElement>): ReactNode => {
    const ref = useRef<HTMLElement>(null);
    const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

    useEffect(() => {
        if (ref.current && !ref.current.shadowRoot) {
            setShadowRoot(ref.current.attachShadow({mode: 'open'}))
        }
    }, [ref]);

    const calculatedSize = sizeCalculate(size)

    return (
        <span ref={ref} className={props.className} data-key={icon.name}>
            {shadowRoot && createPortal(
                <>
                    <style
                        dangerouslySetInnerHTML={{__html: `:host{display:inline-block;vertical-align:0}span,svg{display:block}`}}/>
                    <svg viewBox={`0 0 ${icon.width} ${icon.height}`} width={width ?? calculatedSize}
                         height={height ?? calculatedSize} {...props}>
                        {
                            icon.svgPathData.map((path, index) => {
                                return createElement(path.name, {
                                        ...reactifyAttributes(path.attributes),
                                        key: index
                                    },
                                    path.children.map((childPath, childIndex) => createElement(childPath.name, {
                                        ...reactifyAttributes(childPath.attributes),
                                        key: childIndex * 2
                                    }))
                                )
                            })
                        }
                    </svg>
                </>,
                shadowRoot
            )}
        </span>
    )
}

export default Glyph