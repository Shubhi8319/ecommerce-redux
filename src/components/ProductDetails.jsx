import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../assets/css/productDetail.css'
import { fetchProducts } from '../Redux';

const ProductDetails = ({productData,fetchProducts}) => {

  useEffect(()=>{
    fetchProducts()
  },[])

  console.log(productData);
  const { id } = useParams()

    return (
    <>
     {
      productData.products.filter((prd) =>  prd.id == id )
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

const mapStateToProps = ( state )=>{
  return{
    productData: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchProducts: () => dispatch(fetchProducts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails)