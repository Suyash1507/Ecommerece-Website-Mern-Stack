import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Loginscreen() {


  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  const loginreducer = useSelector(state => state.loginReducer)
  const { loading, error } = loginreducer
  const dispatch = useDispatch()
  function login(e) {

    e.preventDefault()
    const user = {
      email: email,
      password: password
    }
    dispatch(loginUser(user))


  }
  useEffect(() => {

    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }

  }, [])

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-4 card p-3" style={{ marginTop: "150px" }}>
          <div className="div">
            <h2 className='text-center m-5'>Login</h2>
            {error && (<Error error='Invalid Credentials' />)}
            {loading && (<Loader />)}
            <form onSubmit={login}>

              <input type="text" placeholder='Email..' className='form-control' value={email} required onChange={(e) => { setemail(e.target.value); }} />
              <input type="password" placeholder='password..' className='form-control' value={password} required onChange={(e) => { setpassword(e.target.value); }} />

              <div className='text-right'>
                <button type='submit' className='btn mt-3'>LOGIN</button>
              </div>
            </form>
            
          </div>
          <a href="/register" className='mt-3'>Click Here To Register</a>
        </div>
      </div>
    </div>
  )
}

export default Loginscreen
