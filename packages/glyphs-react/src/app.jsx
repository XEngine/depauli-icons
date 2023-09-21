import Glyph from "./lib/glyph.tsx";
import {ArrowLightRightMisc} from "@depaulisystems/glyphs";
import React from "react";
import './app.css'
const App = () => {
    return (
        <div>
            <h1>Teqsqsqqt</h1>
            <Glyph className="testclass" icon={ArrowLightRightMisc} size="18" />
        </div>
    )
}

export default App