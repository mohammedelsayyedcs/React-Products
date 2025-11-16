import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ProductDetails() {
    const { pId } = useParams()

    // Variable to store product details
    const [product, setProduct] = useState({});

    // Get product details from fakestoreapi.com
    const getProductDetails = async (url) => {
        try {
            const res = await axios.get(url)
            setProduct(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    // Call it in page first load
    useEffect(() => { getProductDetails(`https://fakestoreapi.com/products/${pId}`) }, [])

    // Go Back
    const navTo = useNavigate()
    const goBack = () => {
        navTo(-1);
    }

    return (
        <div className='body row container mx-auto'>
            <div className='col-sm-12 col-md-6 pe-5'>
                <img src={product.image} className="card-img-top" alt={product.title} />
            </div>

            <div className="col-sm-12 col-md-6 lead mt-5 ps-5">
                <h4 className="card-title py-2">{product.title}</h4>
                <h3 className='text-info py-2'>{product.price}$</h3>
                <p className="card-text py-2">{product.description}</p>
                <a className="btn btn-danger px-4 py-2 mt-4" onClick={goBack}>Back</a>
            </div>
        </div>
    )
}
