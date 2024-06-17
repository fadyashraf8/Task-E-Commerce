import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner.jsx'
import { AuthContext } from '../context/AuthContext.js'

export default function ProductDetails() {


  let { addProductToCart} = useContext(AuthContext)

    let { id } = useParams()
    let [product, setProduct] = useState('')
    let [loading, setLoading] = useState(true)
    let { AddToCart } = useContext(AuthContext)

    useEffect(() => {
        getProductDetails()
        
    }, [])

    function getProductDetails() {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((data) => {

            setProduct(data.data)
            setLoading(false)
        }).catch(() => {

        })
    }


    return (

        <>
            {loading ?
           <Spinner/>:    <div className='row my-5'>
                <div className="col-md-7 ">
                    <img src={product.image} className='border border-1 p-3 rounded shadow-lg' width={500} height={500} alt="" />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column p-3 shadow-lg ">
                    <h6 className=''>Title: <span className='h4'>{product.title}</span></h6>
                    <h6 className=''>Description: <span className='h4'>{product.description}</span></h6>
                    <h6 className=''>Price: <span className='h4'>{product.price}</span></h6>
                    <h6 className=''>Category: <span className='h4'>{product.category}</span></h6>
                    <button onClick={addProductToCart} className='btn btn-outline-secondary bg-color text-ok d-block my-3 w-100 '>Add To Cart</button>
                </div>
            </div>}
         

        </>
    )
}
