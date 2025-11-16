import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios';
import Product from '../Product/Product';
import { useGetAllProductsQuery } from '../../ReduxTK/productsApiSlice';

export default function Products() {
  ////////////////////////////////////
  //// Using axios and useEffect /////
  ///////////////////////////////////
  // Set Variable to store products
  // const [products, setProducts] = useState([]);

  // // Get/Fetch all products
  // const getProducts = async (url) => {
  //   try {
  //     const res = await axios.get(url);
  //     setProducts(res.data)
  //   } catch (error) {
  //     console.log(error);

  //   }
  // }

  // // Call getProducts in page first load
  // useEffect(() => { getProducts('https://fakestoreapi.com/products') }, [])

  const { data, error, isLoading } = useGetAllProductsQuery();
  if (error) return <h3>error</h3>
  if (isLoading) return <h3>Loading...</h3>

  return (
    <div className='body row container mx-auto'>
      {
        data.map((item) => {
          return <Product key={item.id} obj={item} />
        })
      }
    </div>
  )
}
