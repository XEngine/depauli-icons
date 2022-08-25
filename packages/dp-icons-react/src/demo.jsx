import {createRoot} from 'react-dom/client'
import Demo from './demo-component.jsx'
import {Library} from './index.js'
import CreditCard from '../../dp-icons-regular/icons/CreditCard.js'

Library.add(CreditCard)

createRoot(document.getElementById('app')).render(
    <Demo />
)