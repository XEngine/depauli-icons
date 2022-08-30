import DPIcon from "./dp-icon.jsx"
import {useState} from "react";

export default function DemoComponent() {
    const [icon, setIcon] = useState('credit-card')
    const [fill, setFill] = useState('#000')

    const changeIcon = () => {
        setIcon('bin-1')
        setFill('#ffdd98')
    }

    return <div>
        <DPIcon icon={icon} stroke={fill} size="58" />
        <button onClick={changeIcon}>Click meh!</button>
    </div>
}