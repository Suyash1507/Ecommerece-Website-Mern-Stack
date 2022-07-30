import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch , useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions'

function Checkout({amount}) {
  const dispatch = useDispatch()
    function tokenHandler(token)
    {
         console.log(token);
         dispatch(placeOrder(token , amount))
         
    }
  return (
    <div>
      <StripeCheckout
      token={tokenHandler}
      stripeKey= 'pk_test_51LR6LaSG76tvypSRBmINvsEL0oTvFudP1hbYBtdQhEgr3Ey8CRcheZezKse3cT4rEoaGHkUqMyix2eQ7B7S9jO0500uuJGRpyv'
      amount={amount*100}
      shippingAddress
      currency='INR'

      >
        <button className='btn'>PAY NOW</button>
      </StripeCheckout>
    </div>
  )
}

export default Checkout
