import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext.js'

export default function UserCart() {

    let { getUserCart, cartProducts } = useContext(AuthContext)


    useEffect(() => {
        getUserCart()
    }, [])
    return (
        <>

            <div className='container my-5 vh-100 d-flex justify-content-center align-content-center flex-column'>

                {cartProducts.map((e) => {

                    return <div className='row border border-3 my-2 p-3 '>
                        <div className="col-md-6 d-flex justify-content-center align-items-center ">
                            <h3>

                            Product Id :{e.productId}
                            </h3>
                            </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <h3>

                            Quantity :{e.quantity}
                            </h3>
                            </div>
                    </div>




                })}
            </div>
        </>
    )
}
