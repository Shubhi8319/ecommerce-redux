import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/nav.css'

const Navbar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg w-100 ">
  <div class="container-fluid d-flex align-items-center justify-content-between ">
    <Link to = {'/'} ><a class="navbar-brand " href="#">EKART</a></Link>
    <button class="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav w-100  mb-2 mb-lg-0  d-flex align-items-center justify-content-center">
        <li class="nav-item">
          <Link to = {'/'}><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/products'> <a class="nav-link" >Products</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <Link to={'/cart'}><button class="cart-btn">Cart</button></Link>
  </div>
</nav>
   </>
  )
}

export default Navbar