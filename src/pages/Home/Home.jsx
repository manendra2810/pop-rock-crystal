import React from 'react'
import "./Home.css";
import Header from '../../components/Header/Header';
import AllProducts from "../../components/AllProducts/AllProducts"
import BestPrice from '../../components/BestPrice/BestPrice';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header/> 
      <AllProducts/>
      <BestPrice/>
      <Footer/>
    </div>
  )
}

export default Home
