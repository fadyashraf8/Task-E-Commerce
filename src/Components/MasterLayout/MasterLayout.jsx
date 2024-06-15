import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './../Footer/Footer';

export default function MasterLayout() {
    return (

        <>

            <Navbar />

            <div className='container'>
                <Outlet />
            </div>

            <Footer />
        </>


    )
}
