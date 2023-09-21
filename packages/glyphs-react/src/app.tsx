import React, {ReactNode} from 'react'

import Glyph from "./lib/glyph";
import {ArrowLightRightMisc} from "@depaulisystems/glyphs";
import './app.css'

const App = (): ReactNode => {
    return (
        <div>
            <h1>Teqsqsqqt</h1>
            <Glyph className="testclass" icon={ArrowLightRightMisc} size="18"/>
        </div>
    )
}

export default App