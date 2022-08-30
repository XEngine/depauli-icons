import {createRoot} from 'react-dom/client'
import Demo from './demo-component.jsx'
import {Library} from './index.js'
import CreditCard from '../../dp-icons-regular/icons/CreditCard.js'
import Bin1 from '../../dp-icons-regular/icons/Bin1.js'

Library.add(CreditCard)
Library.add(Bin1)

createRoot(document.getElementById('app')).render(
    <Demo />
)