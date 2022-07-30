export const addToCart=(product , quantity)=>(dispatch , getState)=>{
    const cartItem = {

        name : product.name , 
        _id : product._id ,
        price : product.price ,
        countInStock : product.countInStock , 
        quantity : quantity

      }

      dispatch({type : 'ADD_TO_CART' , payload : cartItem})

      localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems)) //converting JSON data to a string
}

export const deleteFromCart=(item)=>(dispatch , getState)=>{

  dispatch({type:'DELETE_FROM_CART' , payload:item})//sending the payload as item

  localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))


}
//Every time when the page reloads we need to get data from local storage so we are adding a new item in local storage , everytime a new item is added to cart
