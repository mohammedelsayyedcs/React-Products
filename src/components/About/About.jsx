import React from 'react'
import './About.css'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
    return (
        <div className='body text-center'>
            <h2>About</h2>
            <div className='about-buttons'>
                <Link to={'mission'} className='btn btn-outline-primary px-4 py-2 mx-3 mt-3 mb-5'>Mission</Link>
                <Link to={'vision'} className='btn btn-outline-success px-4 py-2 mx-3 mt-3 mb-5'>Vision</Link>
            </div>
            <div className='about-contents'>
                <Outlet />
            </div>

        </div>
    )
}
