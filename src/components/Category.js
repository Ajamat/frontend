
import axios from 'axios';
import { useEffect, useState } from 'react';
function Category({ filter, setFilter }) {
  const [category, setcategory] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      await axios.get(`http://localhost:4000/api/category`)
        .then((res) => {
          setcategory(res.data.category)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getData()
  }, [])

  return (
    <div className='w-full h-14 bg-slate-200'>
      <ul className='flex gap-5 items-center h-14'>
        {category.map(e => (
          <li key={e._id} className={`${filter === e._id ? 'text-blue-600 rounded-lg border-[] bg-white' : ''} text-md cursor-pointer rounded-md border border-black px-2 py-1 `}
            onClick={() => setFilter(e._id)}
          >{e.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category
