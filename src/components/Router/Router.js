import React from 'react'
import { Route, Routes } from 'react-router'
import Productddetails from '../Productddetails'
import App from '../../App'
import Create from '../Create'

function Router() {
  return (
    <>
      <Routes>
        <Route index element={<App/>}/>
        <Route path='/productdetails/:id' element={<Productddetails/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </>
  )
}

export default Router
