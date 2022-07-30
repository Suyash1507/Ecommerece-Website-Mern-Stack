import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import React, { useState, useEffect } from "react";
import { getProductById } from "../actions/productAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from '../components/Review';

export default function Productdescscreen() {
   
    let {id} = useParams();
    // const product= products.find(product=> product.id === id)


    const dispatch = useDispatch();
    const [quantity, setquantity] = useState(1);
    const getproductbyidstate = useSelector(
        (state) => state.getProductByIdReducer
      );
      const { product, loading, error } = getproductbyidstate;
      function addtocart() {
        dispatch(addToCart(product, quantity));
      }
    useEffect(() => {
        dispatch(getProductById(id));
    }, []);
    return (
        <div>
            {loading ? (<Loader/>): error ? (<Error error= 'Something went wrong...'/>):(
                <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card p-2 m-3">
                        <h1>{product.name}</h1>
                        <img src={product.image} className="img-fluid m-3 bigimg"/>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="col-md-6 pull-left">
                    <div className="m-2">
                        <h1>Price: {product.price}</h1>
                        <hr />
                        <h1>Select Quantity</h1>
                        <select className='pull-left' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(product.countInStock).keys()].map((x,i)=>{ //we map through the array in this line as we cannot render the selection list directly
                            return <option value={i+1}>{x+1}</option>
                        })}
                        </select>
                        <hr />
                        <button className='btn btn-dark' onClick={addtocart}>Add to Cart</button>
                    </div>
                    <hr />
                    <Review product={product}/>
                </div>
            </div>
            )}
            
        </div>
    )
}
//We are using params in  line 6
 //In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action. 
 //The react-router-dom package has useParams hooks that let you access the parameters of the current route
 //In Line 23 counntInStock is treated as array because we have written it in the empty array with 3 dots

