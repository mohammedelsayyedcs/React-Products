import React from 'react'
import './Vision.css'
import { useNavigate } from 'react-router-dom'

export default function Vision() {
    const navTo = useNavigate()
    const goForward = () => {
        navTo(1)
    }
    return (
        <div>
            <h3>Vision</h3>
            <button className='btn btn-danger px-4 py-2 mt-3' onClick={goForward}>Forward</button>
        </div>
    )
}
