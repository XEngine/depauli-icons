import Glyph from "./lib/glyph.jsx";
import {ArrowLightRightMisc} from "@depaulisystems/glyphs";
import React from "react";
import './app.css'
const App = () => {
    return (
        <div>
            <h1>Teqsqqqt</h1>
            <Glyph className="testclass" icon={ArrowLightRightMisc} size="18" />
        </div>
    )
}

export default App