// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { AiOutlineShoppingCart } from 'react-icons/ai'
// import AddCart from './AddCart'
// import { useState } from 'react';
import { useState, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsCart } from 'react-icons/bs'
import Login from './Login'
import Register from './Register'
import { useNavigate } from 'react-router'
import AddCart from './AddCart'

// {data,setData}

function Navbar({ popup, setPopup }) {
  const nevigate = useNavigate()

  const [regPopup, setRegPopup] = useState(false)
  const [drop, setDrop] = useState(false)
  const [cart, setCart] = useState(false)
  const user = JSON.parse(sessionStorage.getItem('user'))

  const handleCart = () => {
    if(user){
      setCart(!cart)
    }else{
     setPopup(!popup)
    }
    
  }
  const handleLogout = () => {
    sessionStorage.clear()
    setDrop(false)
  }
  useEffect(() => {
  })
  const handleCreate = () => {
    nevigate('/create')

  }


  return (<>
    {popup ? <Login popup={popup} setPopup={setPopup} setRegPopup={setRegPopup} /> : null}
    {regPopup ? <Register {...{ regPopup, setRegPopup, setPopup }} /> : null}
    <nav className='flex justify-center gap-9 items-center w-full bg-blue-600 sticky top-0 z-10 h-12'>
      <div className='relative w-1/2'>
        <div>
          <input type="text" name="" id="" placeholder='Search for Products,Brands' className='w-full h-8 pl-8 rounded-md outline-none bg-slate-200' />
        </div>
        <CiSearch className='absolute top-2 left-2 text-lg' />
      </div>
      <div>
        {user ?
          <>  <button className='bg-slate-200 py-1 px-3 text-black rounded-sm m-2' onMouseOut={() => { setDrop(false) }} onMouseEnter={() => { setDrop(true) }} >{user.name}</button>
            <button className='bg-slate-200 py-1 px-3 p-2 rounded-sm' onClick={handleCreate}>Create</button>
            {cart ?
              <AddCart />
              : null
            }
            {
              drop ?
                <div class="absolute  top-8 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" onMouseOut={() => { setDrop(false) }} onMouseOver={() => { setDrop(true) }}>
                  <div class="py-1" role="none">
                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Profile</a>

                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3" onClick={handleLogout}>Logout</button>

                  </div>
                </div>

                : null
            }
          </>
          :
          <button className='bg-slate-200 py-1 px-3 text-black rounded-sm' onClick={() => setPopup(!popup)}>Login</button>
          
        }
      </div>
     
      <span 
      
      onClick={handleCart}>
        <BsCart className='text-2xl text-white'/>
      </span>
    </nav>

  </>
  )
}

export default Navbar
