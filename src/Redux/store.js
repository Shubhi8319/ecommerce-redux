import {legacy_createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger";
import fetchProductReducer from "./product/ProductReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = legacy_createStore(fetchProductReducer,composeWithDevTools(applyMiddleware(thunk,logger)))

export default store