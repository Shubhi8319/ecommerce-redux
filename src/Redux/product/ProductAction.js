import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, LOADING_ACTION } from "./ProductActionTypes"
import axios from "axios"

const fetchProductRquest = () => {
    return{
        type: FETCH_PRODUCT_REQUEST
    }
}

const fetchProductSuccess  = (products) =>{
    return{
        type: FETCH_PRODUCT_SUCCESS,
        payload: products
    }
}

const fetchProductFailure = (error) =>{
    return{
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const loadingAction = (status) =>{
    return{
        type: LOADING_ACTION,
        payload: status
    }
}

export const fetchProducts = () =>{
    return(dispatch) => {
        dispatch(fetchProductRquest)
        dispatch(loadingAction(true))
        //adding settimeout temporarily for just checking the loader
        // setTimeout(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            const products = response.data
            console.log(products);
           dispatch(loadingAction(false))
            dispatch(fetchProductSuccess(products))
        })
        .catch((error) => {
            dispatch(loadingAction(false))
            const errorMsg = error.message
            dispatch(fetchProductFailure(errorMsg))
        })
    //   }, 3000);
    }
}

