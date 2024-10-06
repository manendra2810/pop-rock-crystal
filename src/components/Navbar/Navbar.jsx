import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo-box">
            <Link to="./" className='logo'><img src={assets.logo} alt="" /></Link>
            <h1>Pop Rock Crystal</h1>
        </div>
        <div className="navbar-right">
            <ul className='navbar-menu'>
                <Link to="./" className='list-item'>Home</Link>
                <Link to="./" className='list-item'>Shop</Link>
                <Link to="./" className='list-item'>About Us</Link>
                <Link to="./" className='list-item'>Help</Link>
            </ul>
            <div className="basket-box"> 
                <div className="count-box">00</div>
                <div className="basket-icon">
                    <img src={assets.basket_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
