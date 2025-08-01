import './List.css';
import { toast } from 'react-toastify'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react'


const List = ({ url }) => {


  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item, index) => {
            if (!item.image) {
              item.image = 'https://via.placeholder.com/150';
            }
            return (
              <div key={index} className='list-table-format'>
                <img src={item.image} />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={() => removeFood(item._id)} className='cursor'><Trash2 width={20} /></p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List