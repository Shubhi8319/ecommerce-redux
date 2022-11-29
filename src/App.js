import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './Redux/store'
import CartContainer from "./components/CartContainer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import ProductDetails from "./components/ProductDetails";

function App() {
//   const[product,setProduct] = useState([])
//   const[cart,setCart] = useState([])
//   async function getData (){
//     const response = await fetch("https://fakestoreapi.com/products")
//     const data = await response.json()
//     setProduct(data)
//  }
//   useEffect(()=>{
//     getData()   
//   },[])
  return (
   <>
     <Provider store={store}>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element = {<CartContainer/>}/>
      <Route path="/products" element={<ProductContainer />}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
      <Route path="/cart" element={<CartContainer/>}/>
      </Routes>
     </Provider>
    </>
  );
}

export default App;
