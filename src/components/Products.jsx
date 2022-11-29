import React from 'react'
import '../assets/css/product.css' 
import { Link } from 'react-router-dom'

const Products = ({pr,handleIsClicked,isClicked}) => {
   
    // const{image,title,price} = props
    return (
        <> 
               <div class="col col-sm-3">
                        <div class="card  d-flex flex-column align-items-center justify-content-between">
                            <img src={pr.image} class="card-img-top" alt="..." />
                            <div class="card-body  d-flex align-items-center flex-column  justify-content-evenly">
                                <h5 class="card-title">{pr.title}</h5>
                                <h5 className='card-title'>$ {pr.price}</h5>
                                <Link to = {`/products/${pr.id}`}><button className='buy-btn'>Buy Now</button></Link>                           </div>
                        </div>
                    </div>      
        </>

    )
}

export default Products