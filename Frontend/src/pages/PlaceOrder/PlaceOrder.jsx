import { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../context/StoreContext.jsx'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChnageHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    console.log(response);
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }
    else{
      alert("Error");
    }
  }

  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
       navigate('/cart')
    }
  },[token])

  
  return (
    <form onSubmit={placeOrder} className='place-order-container'>
      <div className="place-order-left">
        <p className='place-order-left-title'>Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChnageHandler} value={data.firstName} type="text" placeholder='First name' />
          <input required name='lastName' onChange={onChnageHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input required name='email' onChange={onChnageHandler} value={data.email} type="email" placeholder='Email address' />
        <input required name='street' onChange={onChnageHandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city' onChange={onChnageHandler} value={data.city} type="text" placeholder='City' />
          <input required name='state' onChange={onChnageHandler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChnageHandler} value={data.zipcode} type="text" placeholder='Zip code' />
          <input required name='country' onChange={onChnageHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChnageHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder