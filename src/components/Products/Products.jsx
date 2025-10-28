import React from 'react'
import './Products.css'
import Sidebar from '../Sidebar/Sidebar'

export default function Products() {
  return (
    <div className='body row'>
      <div className='col-2'>
        <Sidebar/>
      </div>
      <div className='col-10 container row mx-auto'>
        {cards}
      </div>


    </div>
  )
}
