import React from 'react'
import "./BestPrice.css"
import Button from '../Button/Button'
import { assets } from '../../assets/assets'

const BestPrice = () => {
  return (
    <div className='best-price-main-container'>
      <div className="inner-container">

        <div className="view-all-button">
          <Button text={"View All"} bg_color={"white"} color={"#75CCEB"} border={"2px solid #75CCEB"}/>
        </div>

        <div className="center-container">
          <div className="left">
            <span className='span-1'>BEST PRICE</span>
            <h2>Agate Phone Grip</h2>
            <div className="price">
              <span>44.50$ <hr /></span>
              <span>19.50$</span>
            </div>
            <p>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
            </p>
            <Button className="button" text={"BUY NOW"} bg_color={"#6FB4FF"} color={"white"} border={"none"}/>
          </div>

          <div className="right">
            <div className="bg-img">
              <div className="circle-1">
                <div className="circle-2">
                  <img src={assets.rock_2} alt="" />
                </div>
              </div> 
            </div> 
          </div>
        </div>

      </div>
    </div>
  )
}

export default BestPrice
