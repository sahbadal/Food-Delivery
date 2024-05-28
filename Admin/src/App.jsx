import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import SideBar from './components/SideBar/SideBar.jsx'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>}></Route>
          <Route path='/list' element={<List url={url}/>}></Route>
          <Route path='/orders' element={<Orders url={url}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App