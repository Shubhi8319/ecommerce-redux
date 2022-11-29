import React, { useState ,useEffect} from 'react'
import Products from './Products';
import {fetchProducts} from '../Redux'
import { connect } from 'react-redux'
import Loder from './loader/Loder'



const ProductContainer = ({productData,fetchProducts}) => {
  const[filterData,setFilterData] = useState("")
  useEffect(()=>
  fetchProducts()
  ,[])
  console.log(productData);
  
  function handleClick(e){
    e.preventDefault()
    console.log(e.target.innerText.toLowerCase());
    setFilterData(e.target.innerText.toLowerCase())
  }

  return productData.showLoading ? (
    <Loder/>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <>
      
      <div id='products' className=' container d-flex flex-column align-items-center justify-content-center'>
        <div className='buttons p-5'>
          <button className='btn  me-3 btn-outline-dark' onClick={handleClick}>All</button>
          <button className='btn me-3 btn-outline-dark' onClick={handleClick}>Clothing</button>
       
          <button className='btn me-3 btn-outline-dark' onClick={handleClick}>Jewelery</button>
          <button className='btn me-3 btn-outline-dark' onClick={handleClick}>Electronics</button>
   
        </div>
        <div class="container max-width text-center  ">
          <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
           {
             productData.products.filter((pr)=>{
              if(pr.category.includes(filterData)){
               return pr
              }
             else if(filterData.includes("all")){
               return pr
             }
             }
              ).map((pr)=>
              <Products key={pr.id} pr={pr} />
              )
             }
             
          </div>
        </div>
      </div>
    </>
  )

}
  

const mapStateToProps = (state) => {
  return {
    productData: state
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchProducts: () => dispatch(fetchProducts())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer)


