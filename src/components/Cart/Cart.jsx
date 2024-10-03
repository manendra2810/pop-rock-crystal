import React from 'react'
import "./Cart.css";
import Button from '../Button/Button';

const Cart = ({src, text1, text2}) => {
  return (
    <div className='cart-box'>
      <img src={src} alt="" />
      <div className="title">
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <Button text={"BUY NOW"} bg_color={"white"} color={"#75CCEB"} border={"3px solid #75CCEB"}/>
    </div>
  )
}

export default Cart
