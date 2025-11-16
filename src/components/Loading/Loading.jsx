import React from 'react'

export default function Loading() {
    return (
        <div className='body d-flex justify-content-center align-items-center'>
            <div className="spinner-grow text-danger"
                style={{ width: "5rem", height: "5rem" }}
                role="status">

            </div>
        </div>

    )
}
