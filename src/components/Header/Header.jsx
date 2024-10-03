import React, { useEffect, useState } from 'react'
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import { assets } from '../../assets/assets';
import Button from '../Button/Button';

const Header = () => {
  const images = Array.from({ length: 7 }, (_, index) => ({
    src: assets.rock_1, // Ensure this is correct
    text1: 'CRYSTAL AGATE PHONE GRIP',
    text2: index,
  }));

  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    console.log("plusSlidesIndex0")
    setSlideIndex((prevIndex) => {
      const newIndex = (prevIndex + n + images.length) % images.length;
      console.log("plusSlidesIndex")
      return newIndex;
    });
  }; 

  const currentSlide = (n) => {
    console.log("plusSlidesIndex3")
    setSlideIndex(n);
  };

  return (
    <div className='header'>
      <div className="header-center-container">
        <Navbar /> 
        <div className="hero-section">

          <div className="hero-left">
            <span className='hero-h3'>Welcome to</span>
            <span className='hero-h1'>Pop Rock Crystal Shop!</span>
            <p>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
            <div className="hero-button-box">
              <Button className="hero-button" text={"SHOP NOW"} bg_color={"white"} color={"#317189"} border={"none"}/>
              {/* <a>about us</a> */}
            </div>
          </div>

          <div className="hero-right">
            <div className="slideshow-container">
              {images.map((item, index)=>(
                <div key={index} className="mySlides fade" style={{ display: index === slideIndex ? 'block' : 'none' }}>
                  <img src={item.src}/>
                  <div className="text">
                    <span className='text-1'>{item.text1}</span>
                    <span className='text-2'>{item.text2}</span>
                  </div>
                </div>
              ))}
              <div className="new-tag">New lot</div>
            </div>
            <br/>

            <div className='slider-count-box'>
              <a className="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
              {images.map((_, index)=>(
                <span key={index} className="dot" onClick={()=>currentSlide(index)}></span>
              ))}
              <a className="next" onClick={()=>plusSlides(1)}>&#10095;</a>
            </div>
          </div>

        </div>

        <div className="mouse-scroll-box">
          <img src={assets.mouse_icon} alt="" />
          <span>scroll down</span>
        </div>
      </div>
    </div>
  )
}

export default Header
