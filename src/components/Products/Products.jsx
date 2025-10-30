import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios';
import Product from '../Product/Product';

export default function Products() {
  // Set Variable to store products
  const [products, setProducts] = useState([]);

  // Get/Fetch all products
  const getProducts = async (url) => {
    try {
      const res = await axios.get(url);
      setProducts(res.data)
    } catch (error) {
      console.log(error);

    }
  }

  // Call getProducts in page first load
  useEffect(() => { getProducts('https://fakestoreapi.com/products') }, [])

  return (
    <div className='body row container mx-auto'>
      {products.map((item) => {
        return <Product key={item.id} obj={item} />
      })}
    </div>
  )
}
