import React from 'react'
import "./AllProducts.css"
import { assets } from '../../assets/assets'
import Cart from '../Cart/Cart'
import Button from '../Button/Button'

const AllProducts = () => {
  const carts = Array.from({ length: 8 }, (_, index) => ({
    src: assets.rock_2, 
    text1: 'CRYSTAL AGATE PHONE GRIP',
    text2: "18.99$",
  }));

  // const [cartIndex, setCartIndex] = useState(0);

  // const plusSlides = (n) => {
  //   setSlideIndex((prevIndex) => {
  //     const newIndex = (prevIndex + n + images.length) % images.length;
  //     return newIndex;
  //   });
  // }; 

  // const currentSlide = (n) => {
  //   setSlideIndex(n);
  // };

  return (
    <div className='all-products'>
      <div className="all-products-main-container">
        <div className="heading">
          <h2>All product</h2>
          <hr />
        </div>

        <div className="filter-box">
          <div className="all-products-filter">
            <span>Filter :</span>
            <span>All Products</span>
            <img src={assets.triangle_arrow} alt="" />
          </div>

          <div className="best-selling-filter">
            <span>Sort :</span>
            <span>Best Selling</span>
            <img src={assets.triangle_arrow} alt="" />
          </div>
        </div>

        <div className="all-cart-container">
          {carts.map((cart,index)=>(
            <Cart key={index} src={cart.src} text1={cart.text1} text2={cart.text2}/>
          ))}
        </div>
      </div>
    </div> 
  )
}

export default AllProducts
