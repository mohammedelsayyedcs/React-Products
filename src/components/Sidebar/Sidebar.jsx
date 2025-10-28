import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <Link to={'mission'} className='btn btn-primary px-4 py-2 mx-3 my-3'>Mission</Link>
            <br />
            <Link to={'vision'} className='btn btn-success px-4 py-2 mx-3 my-3'>Vision</Link>
            <br />
            <Link to={'main'} className='btn btn-danger px-4 py-2 mx-3 my-3'>Main</Link>
        </div>
    )
}
