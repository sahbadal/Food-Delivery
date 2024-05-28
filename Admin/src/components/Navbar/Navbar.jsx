import './Navbar.css';
import { assets } from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <div className="navbar-logo-title">
          <img src={assets.chilli} />
          <h1>SPICY</h1>
        </div>
        <div className="admin-panel">Admin Panel</div>
      </div>
      <img className='profile' src={assets.profile_image} />
    </div>
  )
}

export default Navbar