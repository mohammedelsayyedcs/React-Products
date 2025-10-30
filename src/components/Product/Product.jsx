import React from 'react'
import './Product.css'

export default function Product(props) {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 p-3 h-25'>
            <div className="card border-0">
                <img src={props.obj.image} style={{ height: '250px' }} className="card-img-top" alt={props.obj.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.obj.title}</h5>
                    <h3 className='text-danger'>{props.obj.price}$</h3>
                    <p className="card-text text-truncate">{props.obj.description}</p>
                    <a className="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    )
}
