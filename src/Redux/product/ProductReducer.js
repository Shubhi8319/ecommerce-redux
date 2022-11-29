import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, LOADING_ACTION } from './ProductActionTypes'

const initialState = {
    showLoading : false,
    products : [],
    error : ''
}

const fetchProductReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:  return{
            ...state

        }
        case FETCH_PRODUCT_SUCCESS: return{
            
            products: action.payload,
            error: ''
        }
        case FETCH_PRODUCT_FAILURE: return{
         
            products: [],
            error: action.payload
        }
        case LOADING_ACTION: return{
            ...state,
            showLoading: action.payload
        }
        default: return state
    }
} 

export default fetchProductReducer