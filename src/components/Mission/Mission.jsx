import React from 'react'
import './Mission.css'
import { useNavigate } from 'react-router-dom'

export default function Mission() {

    const navTo = useNavigate()
    const goBackward = () => {
        navTo(-1)
    }

    return (
        <div>
            <h3>Mission</h3>
            <button className='btn btn-info px-4 py-2 text-white mt-2' onClick={goBackward} >Back</button>
        </div>
    )
}
