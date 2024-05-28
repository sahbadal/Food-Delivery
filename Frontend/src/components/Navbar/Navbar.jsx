import './Navbar.css'
import {assets} from '../../assets/assets.js'
import { useContext, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.jsx'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate('/')
    }

    const logout = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }


  return (
    <div className='navbar'>
        <div className='logo' onClick={goToHome}>
            <img src={assets.chilli}/>
            <h1>SPICY</h1>
        </div>
        <div className='nav-lists'>
            <ul>
                <Link to={'/'} className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</Link>
                <a href='#exploreMenu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
                <a href='#appDownloadd' className={menu === "Mobile app" ? "active" : ""} onClick={() => setMenu("Mobile app")}>Mobile app</a>
                <a href='#footer' className={menu === "Contact us" ? "active" : ""} onClick={() => setMenu("Contact us")}>Contact us</a>
            </ul>
        </div>
        <div className='nav-right'>
            <img src={assets.search_icon}/>
            <div className='basket-icon'>
                <Link to={'/cart'}><img src={assets.basket_icon}/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)} className='btn'>sign in</button>
            :<div className='navbar-profile'>
                <img src={assets.profile_icon}/>
                <ul className="nav-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon}/><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} />Logout</li>
                </ul>
            </div> }
        </div>
    </div>
  )
}

export default Navbar