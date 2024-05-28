import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
     {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/order' element={<PlaceOrder/>}></Route>
         <Route path='/verify' element={<Verify/>}></Route>
         <Route path='/myorders' element={<MyOrders/>}></Route>
       </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App