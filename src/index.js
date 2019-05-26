import nav from './nav'
import { footer } from './footer'
import makeButton from './button'
import { makeColorStyle } from './button-styles'
import buttonStyles from './button.css'

const button = makeButton('Yay! A button!')
button.style = makeColorStyle('cyan')
document.body.appendChild(button)
document.body.appendChild(footer)
