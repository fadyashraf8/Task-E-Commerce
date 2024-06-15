import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.js'

export default function Navbar() {

    let { userData, logOut ,cartItems} = useContext(AuthContext)
    return (
        <>
            <nav className="navbar bg-color navbar-expand-lg ">
                <div className="container ">
                    <Link className="navbar-brand text-ok" to="/">Home Furniture</Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active text-ok text-font fs-5 " : "nav-link text-ok"} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active text-ok text-font fs-5" : "nav-link text-ok"} to="/products">Products</NavLink>
                            </li>
                     
                        
                        </ul>

                        {userData !== null ?

                            <ul className="navbar-nav ms-auto">
                                <button type="button" className="btn position-relative fs-6 text-white mx-3 mt-2">
                               
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success my-2">
                                        {cartItems}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                                <li className="nav-item ">
                                    <Link className="nav-link text-ok fs-4 " onClick={logOut} >Logout</Link>
                                </li>

                            </ul>


                            :
                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link active text-ok text-font fs-5 " : "nav-link text-ok"} to="/login">Login</NavLink>
                                </li>
                      
                              
                            </ul>
                        }




                    </div>
                </div>
            </nav>
        </>
    )
}
