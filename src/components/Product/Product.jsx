import React from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'

export default function Product(props) {
    const navTo = useNavigate()

    const viewProductDetails = (id) => {
        navTo(`/products/${id}`);
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 p-3 h-25'>
            <div className="card border-0">
                <img src={props.obj.image} style={{ height: '250px' }} className="card-img-top" alt={props.obj.title} />
                <div className="card-body lead">
                    <h5 className="card-title" style={{ height: "70px" }}>{props.obj.title}</h5>
                    <h3 className='text-danger'>{props.obj.price}$</h3>
                    <p className="card-text text-truncate" style={{ height: "50px" }}>{props.obj.description}</p>
                    <a className="btn btn-primary" onClick={() => { viewProductDetails(props.obj.id) }}>View Details</a>
                </div>
            </div>
        </div>
    )
}
