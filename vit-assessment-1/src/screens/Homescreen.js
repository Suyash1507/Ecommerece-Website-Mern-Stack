import React from 'react'
import axios from 'axios'
import Product from '../components/Product'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../actions/productAction';
import Loader from '../components/Loader';
import Error from "../components/Error";
import Filter from '../components/Filter';


const Homescreen = () => {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getallproductsstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filter/>
      <div className="row justify-content-center">
      {loading ? (
          <Loader/>
        ) :error ? (
          <Error error= 'Something went wrong...'/>
        ) : (
           products.map(product=>{
               return <div className='col-md-3 m-2 p-2  p-3 mb-5 bg-white rounded card'>
                   <Product product={product}/>
               </div>
           })
        )}
      </div>
    </div>
  )
}
//to perform api request we use axios
//line 27 displays the data in homescreen
export default Homescreen
