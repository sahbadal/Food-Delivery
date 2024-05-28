import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='exploreMenu'>
        <h1>Explore our menu</h1>
        <p>Explore a world of flavors with our carefully curated menu. From fiery spices to soothing desserts, find your perfect dish for any craving. Start your taste adventure with us—explore, enjoy, and come back for more!</p>
        <div className='explore-menuLists'>

            {
                menu_list.map(item=>(
                    <div onClick={() =>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='menuLists-items' key={item.menu_name}>
                        <img className={category === item.menu_name?"active": ""} src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>
                ))
            }

        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu