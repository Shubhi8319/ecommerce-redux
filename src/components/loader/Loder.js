import React from 'react'
import './loader.css'

const Loder = (props) => {
  return (
    <div>
        <div className='overlay'></div>
        <div className='loader-back'>
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>Loading Products</div>
        </div>
        
    </div>     
  )
}

export default Loder