import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductLoading = () => {
  return (
    <>
    <div className='col-md-3 col-lg-4 col-xl-4'>
    <Skeleton height={350}/>
    </div>
    <div className='col-md-3 col-lg-4 col-xl-4'>
    <Skeleton height={350}/>
    </div>
    <div className='col-md-3 col-lg-4 col-xl-4'>
    <Skeleton height={350}/>
    </div>
    <div className='col-md-3 col-lg-4 col-xl-4'>
    <Skeleton height={350}/>
    </div>
    </>
  )
}

export default ProductLoading