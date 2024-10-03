import React from 'react'
import "./Button.css"

const Button = ({text, bg_color, color, border}) => {
  return (
    <div className='button'>
      <button style={{ backgroundColor: bg_color, color: color, border:border }}>{text}</button>
    </div>
  )
}

export default Button
