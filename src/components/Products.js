
import axios from 'axios';
import { useNavigate } from 'react-router'



function Products({ Items, setPopup }) {
  
  const nevigate = useNavigate();
  const token = sessionStorage.getItem('token')
  const headers = {token}
  const handleCart = async (product) => {
  await  axios.post(`http://localhost:4000/api/cart`,product, {headers} )
    .then((response) => {
        console.log(response)
     
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });
  }

  const handleBuy = (e) => {
    if (headers !== null) {
      nevigate(`/productdetails/${e._id}`,{headers})
    } else {
      setPopup(true)
    }
  }

  return (
    <>
      <div className=' w-full px-14 mt-5 h-full flex justify-center flex-wrap gap-4'>

        {Items?.map(e => (<div key={e._id} className='flex flex-col rounded-md w-[250px] border'>
          <div className='flex justify-center p-1 relative'>
            <img className='w-32' src={'http://localhost:4000/api/' + e.imageurl} alt="ProductImage" />
          </div>
          <div className=" flex flex-col gap-1">
            <p className=' font-semibold hover:text-blue-600 px-1'>{e.name}</p>
            <div>
              <p className='truncate text-sm px-1'>{e.des}</p>
            </div>
            <div className="flex items-center justify-between text-md font-serif px-1">
              <p>{e.price}</p>
              <p className='text-green-400'>10%</p>
            </div>
            <div className="flex justify-between px-1 py-1">
              <button onClick={() => handleCart(e)} className='text-xs py-1.5 px-4 rounded-md text-white font-medium bg-blue-500'>Cart</button>
              <button className='text-xs py-1.5 px-4 rounded-md text-white font-medium bg-blue-500' onClick={() => handleBuy(e)}>Buy</button>

            </div>
          </div>
        </div>))
        }
      </div>

    </>
  )
}

export default Products
