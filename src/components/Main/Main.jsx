import React, { useEffect, useState } from 'react'
import './Main.css'
import axios from 'axios'

export default function Main() {
    // We will use Axios here to fetch data from fakestoreapi.com
    // Variable to store all products
    let [products, setProducts] = useState([])
    // Async function to get products from fakestoreapi.com
    const getApiData = async (url) => {
        try {
            const res = await axios.get(url);
            setProducts(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getApiData('https://fakestoreapi.com/products') }, [])

    return (
        <div className='container row mx-auto py-4'>
            {
                products.map((item) => {
                    return (
                        <div key={item.id} className="card col-4 border-0 px-3 py-3">
                            <img src={item.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text text-truncate">{item.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
