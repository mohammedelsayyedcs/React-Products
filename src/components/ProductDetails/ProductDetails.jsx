import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useGetProductByIdQuery } from '../../ReduxTK/productsApiSlice';
import Loading from '../Loading/Loading';

export default function ProductDetails() {
    ////////////////////////////////////
    //// Using axios and useEffect /////
    ///////////////////////////////////
    // // Variable to store product details
    // const [product, setProduct] = useState({});

    // // Get product details from fakestoreapi.com
    // const getProductDetails = async (url) => {
    //     try {
    //         const res = await axios.get(url)
    //         setProduct(res.data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // // Call it in page first load
    // useEffect(() => { getProductDetails(`https://fakestoreapi.com/products/${pId}`) }, [])    

    const { pId } = useParams()

    // Go Back
    const navTo = useNavigate()
    const goBack = () => {
        navTo(-1);
    }

    // Redux
    const { data, error, isLoading } = useGetProductByIdQuery(pId);
    if (error) return <h3 className='text-danger'>{error}</h3>
    if (isLoading) return <Loading />

    return (
        <div className='body row container mx-auto'>
            <div className='col-sm-12 col-md-6 pe-5'>
                <img src={data.image} className="card-img-top" alt={data.title} />
            </div>

            <div className="col-sm-12 col-md-6 lead mt-5 ps-5">
                <h4 className="card-title py-2">{data.title}</h4>
                <h3 className='text-info py-2'>{data.price}$</h3>
                <p className="card-text py-2">{data.description}</p>
                <a className="btn btn-danger px-4 py-2 mt-4" onClick={goBack}>Back</a>
            </div>
        </div>
    )
}
