import './SideBar.css';
import { assets } from '../../assets/assets.js';
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options-container">
        <NavLink to={'/add'} className="sidebar-option">
          <img src={assets.add_icon} />
          <p>Add Items</p>
        </NavLink>
        <NavLink to={'/list'} className="sidebar-option">
          <img src={assets.order_icon} />
          <p>List Items</p>
        </NavLink>
        <NavLink to={'./orders'} className="sidebar-option">
          <img src={assets.order_icon} />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar