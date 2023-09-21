import './App.css'
import React from 'react'

import {
    AlignCenterTypography,
    ArrowLightRightMisc,
    LoveItRegular,
    ReturnMisc,
    RotateMisc,
    ShippingHerrenRegular,
    TruckHeaMisc,
    UserDuotone,
    ZoomInMisc
} from '@depaulisystems/glyphs'

import Glyph from "@depaulisystems/glyphs-react";

function AppServer() {

    return (
        <div className="App">
            <h1>Test</h1>
            <Glyph icon={ArrowLightRightMisc}/>
        </div>
    )
}

export default AppServer
