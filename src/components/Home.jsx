import React from 'react'
import '../assets/css/home.css'
import ProductContainer from './ProductContainer'
import { Link } from 'react-router-dom'

const Home = ({ product,setProduct,handleIsClicked,isClicked}) => {
  return (
    <>
    <div className="Home d-flex align-items-center justify-content-center">
        <div className="content  d-flex align-items-start flex-column justify-content-evenly">
            <h1>New Season Arrivals</h1>
            <h2>Hurry up!!!!!</h2>
            <Link to='/products'><button href="products" className='shop-btn'>Shop Now</button></Link>
        </div>
    </div>
    <ProductContainer product={product} setProduct={setProduct} />
    </>
  )
}

export default Home