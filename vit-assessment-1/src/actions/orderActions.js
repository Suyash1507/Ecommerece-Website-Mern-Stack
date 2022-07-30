import axios from "axios";
export const placeOrder =(token , subtotal) =>(dispatch , getState)=>{

    const currentUser = getState().loginReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    


    dispatch({type:'PLACE_ORDER_REQUEST'})

    axios.post('/api/orders/placeorder' , {token , subtotal , currentUser , cartItems}).then(res=>{

         dispatch({type:'PLACE_ORDER_SUCCESS'})
         console.log(res);

    }).catch(err=>{
        dispatch({type:'PLACE_ORDER_FAILED'})
    })


}
//in the subtotal all the details that we are entering will be send to the backend
//current user displays the details of user
//cart items displays order details