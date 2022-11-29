import React from 'react'
import { useParams } from 'react-router-dom'
import '../assets/css/productDetail.css'

const ProductDetails = ({product}) => {
  console.log(product);
  const { id } = useParams()

    return (
    <>
     {
      product.filter((prd) =>  prd.id == id )
      .map((prd)=>
      <div key={prd.id} className='container d-flex  productDetail'>
        <div >
        <img src={prd.image} alt="" />
       
        </div>
     
       <div className='d-flex flex-column align-items-start ms-5 justify-content-evenly'>
       <h2>{prd.title}</h2>
       <h3>${prd.price}</h3>
       <h5>{prd.description}</h5>
       <button  className='cart-btn'>add to cart</button>
       </div>
      
       
      </div>
      )
    } 
  
    </>
  )
}

export default ProductDetails