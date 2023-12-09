import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'


function AddCart() {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts)
  const token = sessionStorage.getItem('token')
  const headers = {token}
  const getCartProducts = () => {
    axios.get('http://localhost:4000/api/cartproduct', { headers: { token: sessionStorage.getItem('token') } })
      .then((res) => {
        setCartProducts(res.data.cart)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleIncrement = (productId) => {
    axios.post(`http://localhost:4000/api/increment/${productId}`, null, {
      headers: { token: sessionStorage.getItem('token') },
    })
      .then((res) => {
        getCartProducts();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDecrement = (productId) => {
    axios.post(`http://localhost:4000/api/decrement/${productId}`, null, {
      headers: { token: sessionStorage.getItem('token') },
    })
      .then((res) => {
        getCartProducts();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleDelete = (_id) => {
    axios.delete(`http://localhost:4000/api/cart/${_id}`, {headers} ,{
      
    })
      .then((response) => {
        if (response) {
          getCartProducts();
        }
      })
      .catch((error) => {
        console.error('Error deleting item from cart:', error);
      });
  }

  useEffect(() => {
    getCartProducts();
  }, [])
  return (
    <div className='w-1/3 h-screen fixed top-13 right-0 bg-blue-600 px-4 z-10 overflow-auto'>

      {cartProducts.map((product) => (
        <div key={product._id} className='bg-white h-[130px] w-full  flex items-center rounded-md mt-2 gap-4 '>
           <div className='flex justify-center pl-1 items-center'>
              <img className=' border h-16 w-16 rounded-md' src={'http://localhost:4000/api/' + product.product_id.imageurl} alt='Product' />
            </div>
          <div  className=' flex py-8 sm:py-4 md:py-6 lg:py-8 gap-4'>
           
            <div className='flex flex-col'>
              <h3>{product.product_id.name}</h3>
              <p>{product.product_id.des}</p>
              <p>{product.product_id.price}</p>
              <div className='flex gap-3 items-center'>
                <p className='bg-slate-100 w-7 h-7 rounded-full flex items-center justify-center text-xl cursor-pointer' onClick={() => handleDecrement(product._id)}>-</p>
                <p className='bg-slate-100  h-7 px-4 flex justify-center items-center'>{product.count}</p>
                <p className='bg-slate-100 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer' onClick={() => handleIncrement(product._id)}>+</p>
                <span className='text-xl text-red-600 cursor-pointer'
                onClick={() => handleDelete(product._id)}
                >
                  <AiTwotoneDelete />
                </span>
              </div>
            </div>

          </div>
        </div>

      ))}

    </div>
  )
}
export default AddCart
