import { getAllProductsReducer,getProductByIdReducer,addProductReviewReducer} from "./reducers/productReducer";
import {combineReducers} from 'redux'
import {cartReducer} from './reducers/cartReducer'
import {createStore , applyMiddleware} from 'redux' 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { registerNewUserReducer, loginReducer} from "./reducers/userReducer";
import { getOrderByIdReducer, getAllOrdersReducer , getOrdersByUserIdReducer, placeOrderReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer : getProductByIdReducer , 
    cartReducer : cartReducer ,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer: placeOrderReducer,
    addProductReviewReducer : addProductReviewReducer,
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {

  cartReducer : {cartItems : cartItems},
  loginReducer : {currentUser : currentUser}

}



const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
const store = createStore(finalReducer ,initialState,  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))
  export default store