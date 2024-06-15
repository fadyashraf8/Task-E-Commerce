import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


export let AuthContext = createContext()

export default function AuthContextProvider({ children }) {

  const [userData, setUserData] = useState(null)

  const [categories, setCategories] = useState([])
  const [cartItems, setCartItems] = useState(0)


  const notify = (msg, type) => {
    toast[type](msg)
  };
  function SaveUserData() {
    let token = localStorage.getItem("token")
    let decodedToken = jwtDecode(token)
    setUserData(decodedToken)

  }
  function getAllCategories() {
    axios.get(`https://fakestoreapi.com/products/categories`).then((data) => {
      setCategories(data.data)

    }).catch((err) => {
      console.log(err);

    })
  }

  function AddToCart() {
    if (userData) {
      notify("Added To Cart", "success")
    } else {
      notify("Log in First", "error")

    }
  }

  function getUserCart() {
    axios.get(`https://fakestoreapi.com/carts/2`).then((data) => {

      setCartItems(data.data.products.map(e=>e.quantity))
    }).catch((err) => {
     

    })
  }


  function logOut() {
    localStorage.removeItem("token")
    setUserData(null)
    return <Navigate to='/home' />
  }
  return <AuthContext.Provider value={{ SaveUserData, userData, logOut, getAllCategories, categories, setCategories, getUserCart, AddToCart,cartItems }}>
    {children}
  </AuthContext.Provider>
}
