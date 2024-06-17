
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import Spinner from '../Spinner/Spinner.jsx';
import axios from 'axios';

export default function Products() {
  let { getAllCategories, categories, getUserCart ,addProductToCart} = useContext(AuthContext)
  let [popUp, setPopUp] = useState(false)
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProducts()
    getAllCategories()
    getUserCart()

  }, [])

  const sortProductsByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);

  };



  function getAllProducts() {
    axios.get(`https://fakestoreapi.com/products`).then((data) => {
      setProducts(data.data)
      setLoading(false)
    }).catch((err) => {
      console.log(err);
    })
  }
  function getCategoryProducts(e) {
    axios.get(`https://fakestoreapi.com/products/category/${e.target.textContent}`).then((data) => {
      setProducts(data.data)
      setLoading(false)
    }).catch(() => {
    })
  }


  return (
    <>

      {loading ? <Spinner /> :
        <div className='container my-5'>
          <button className='btn btn-dark w-25 my-2 '
            onClick={() => setPopUp(prev => !prev)} >Filter By Category</button>
            
          <button onClick={sortProductsByPrice} className='btn w-100 my-3 d-block' ><span className='border p-2 rounded text-dark h6' >Sort by Price</span></button>

          <button onClick={getAllProducts} className='btn w-100 my-3 d-block' ><span className='border p-2 rounded text-dark h6' >All Products Normally</span></button>

          <div className='row' >


            {popUp ?
              categories.map((c, index) => {
                return <button onClick={getCategoryProducts} className='btn w-25 my-3' key={index}><span className='border p-2 rounded text-dark h6' >{c}</span></button>
              }) : ""}






            {products.map((e) => {
              return <div key={e._id} className='col-md-4 border border-3 rounded my-4  shadow-lg '>
                <Link to={`/products/${e.id}`} style={{ textDecoration: 'none' }} className='text-dark'>
                  <div className=' px-2 rounded-3  p-4  '>

                    <img src={e.image} alt='' className='w-100' height={250} />

                    <h3 className='my-3'>{e.title.split(' ').slice(0, 2).join(' ')}</h3>


                    <h6 className='my-2'>Price:<span className='h4'>{e.price} EGP</span> </h6>

                  </div>
                </Link>
                <button onClick={addProductToCart} className='btn btn-outline-secondary bg-color text-ok d-block  w-100 mb-3'>Add Product</button>

              </div>
            })}


          </div>
        </div>}


    </>
  )
}
