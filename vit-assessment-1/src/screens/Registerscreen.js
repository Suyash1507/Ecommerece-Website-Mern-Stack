import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerNewUser } from '../actions/userActions'
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
function Registerscreen() {
  const registerstate = useSelector(state => state.registerNewUserReducer)

  const { loading, error, success } = registerstate

  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const dispatch = useDispatch()
  function register(e) {

    e.preventDefault()
    const user = {
      name: name,
      email: email,
      password: password
    }

    if (password == cpassword) {
      dispatch(registerNewUser(user))
    } else {
      alert('passwords not matched');
    }

  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
          <div className="div">
            <h2 className='text-center m-5'>Register</h2>
            {loading && (<Loader />)}
            {error && (<Error error='Email Address is already registred' ></Error>)}
            {success && (<Success success='Your Registration is successfull' />)}
            <form onSubmit={register}>
              <input type="text" placeholder='Name..' className='form-control' value={name} required onChange={(e) => { setname(e.target.value); }} />
              <input type="text" placeholder='Email..' className='form-control' value={email} required onChange={(e) => { setemail(e.target.value); }} />
              <input type="password" placeholder='password..' className='form-control' value={password} required onChange={(e) => { setpassword(e.target.value); }} />
              <input type="password" placeholder='Confirm Password..' className='form-control' value={cpassword} required onChange={(e) => { setcpassword(e.target.value); }} />
              <div className='text-right'>
                <button type='submit' className='btn mt-3'>REGISTER</button>
              </div>
            </form>
            

          </div>
          <a href="/login" className='mt-3'>Click Here to Login</a>
        </div>
      </div>
    </div>
  )
}

export default Registerscreen
