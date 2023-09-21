import './App.css'
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

//import {ShippingHerrenRegular} from '../../packages/glyphs/src/regular/ShippingHerrenRegular'
import Glyph from "@depaulisystems/glyphs-react";

function AppServer() {

  return (
    <div className="App">
        <GlyphsReact icon={ArrowLightRightMisc} style={{color: 'red', fill: 'red'}} />
        {/*  <Glyph icon={ArrowLightRightMisc} style={{color: 'red', fill: 'red'}} />*/}
    </div>
  )
}

export default AppServer
