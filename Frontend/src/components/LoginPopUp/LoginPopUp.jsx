import { useContext, useEffect, useState } from 'react'
import './LoginPopUp.css'
import {assets} from '../../assets/assets.js';
import {StoreContext} from '../../context/StoreContext.jsx'
import axios from 'axios'

const LoginPopUp = ({setShowLogin}) => {


  const {url,setToken} = useContext(StoreContext);

  const [currentState,setCurrentState] = useState("Sign Up");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChnageHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) =>{
    event.preventDefault()
    let newUrl = url;
    if(currentState==="Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl,data)

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }
  

  return (
    <div className='loginPopUp'>
      <form onSubmit={onLogin} className='loginPopUp-container'>
        <div className="loginPopUp-title">
          <h1>{currentState}</h1>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
        </div>
        <div className="loginPopUp-inputs">
          {currentState==="Login"?<></>:<input name='name' onChange={onChnageHandler} value={data.name} type="text" placeholder='your name' required/>}
          <input name='email' onChange={onChnageHandler} value={data.email} type="email" placeholder='your email' required/>
          <input name='password' onChange={onChnageHandler} value={data.password} type="password" placeholder='password' required/>
        </div>
        <button type='submit'>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className="loginPopUp-conditions">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp