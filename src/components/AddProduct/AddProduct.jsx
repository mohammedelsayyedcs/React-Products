import React from 'react'
import { useAddProductMutation } from '../../ReduxTK/productsApiSlice'

export default function AddProduct() {

    const newProduct = {
        "id": 0,
        "title": "string",
        "price": 0.1,
        "description": "string",
        "category": "string",
        "image": "http://example.com"
    }

    // Those variables is a must naming like that
    const [addProduct, { isLoading, isSuccess }] = useAddProductMutation(newProduct);

    return (
        <div className='body text-center'>
            <h1 className='text-danger py-5 my-3'>Add New (Hard-Coded) Product</h1>
            <button className={`btn px-4 py-2 ${isSuccess ? 'btn-success' : 'btn-primary'}`} disabled={isLoading}
                onClick={addProduct}>
                {
                    isLoading
                        ? 'Loading ...'
                        : isSuccess
                            ? '(Added) Add New'
                            : 'Add New'
                }
            </button>
        </div>
    )
}
