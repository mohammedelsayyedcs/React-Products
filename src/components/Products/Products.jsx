import React from 'react'
import './Products.css'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Products() {
  return (
    <div className='row'>
      <div className='col-2'>
        <Sidebar />
      </div>
      <div className='col-10 container row mx-auto'>
        <Outlet/>
      </div>
    </div>
  )
}
