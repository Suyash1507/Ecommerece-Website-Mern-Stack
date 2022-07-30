import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/js/bootstrap.js'
import { logoutUser } from '../actions/userActions';

const Navbar = () => {

  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">ShopKart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className='navbar-nav'>
              <li class="nav-item active text-right">
                <a class="nav-link" href="/orders">Orders</a>
              </li>
            </ul>
            <div className='navbar-nav ml-auto'>
              {currentUser ? (
                <li className="nav-item" onClick={() => { dispatch(logoutUser()) }}>
                  <a className="nav-link" href=''>Logout</a>
                </li>

              ) : (<li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">Login</a>
              </li>)}
              <li className="nav-item">
                <a className="nav-link active" href='/cart'><i className="fa-solid fa-cart-shopping"></i>{cartItems.length}</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
