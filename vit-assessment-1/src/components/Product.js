import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating';
function Product({ product }) { // prop is created to be used in the Homescreen.js page 
  return (
    <div className="float-left">
      <div>
        <Link to={`product/${product._id}`}>
          <img src={product.image} className="img-fluid" />
          <h1>{product.name}</h1>
          <Rating style={{ color: 'orange' }} initialRating={product.rating} className="rating" emptySymbol="far fa-star fa-1x" fullSymbol="fas fa-star fa-1x" readonly={true} />
          <h1>Price: {product.price}</h1>
        </Link>
      </div>
    </div>
  )
}

export default Product

//when we click on any product , it is navigated to product description page along with the product id in line 7
