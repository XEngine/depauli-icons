"use client"

import GlyphSVGRenderer from "./glyph-svg-renderer.js";
import {createElement, useEffect, useRef, useState, FC} from "react";
import {createPortal} from "react-dom";
import {IGlyphProps} from "../../iconType";

const Glyph: FC<IGlyphProps> = (props) => {
    const ref = useRef();
    const [shadowRoot, setShadowRoot] = useState(null);

    useEffect(() => {
        if (ref.current && !ref.current.shadowRoot) {
            setShadowRoot(ref.current.attachShadow({mode: 'open'}))
        }
    }, [ref]);

    return createElement(
        'glyphs-uc',
        {
            ref,
            'data-key': props.icon.name,
            class: props.className,
        },
        shadowRoot && createPortal(
            <>
                <style dangerouslySetInnerHTML={{__html: `:host{display:inline-block;vertical-align:0}span,svg{display:block}`}}></style>
                <GlyphSVGRenderer {...props} />
            </>,
            shadowRoot
        )
    )
}

export default Glyph