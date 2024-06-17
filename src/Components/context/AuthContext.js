import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


export let AuthContext = createContext()

export default function AuthContextProvider({ children }) {

  const [userData, setUserData] = useState(null)
  const [cartProducts, setCartProducts] = useState([])

  const [categories, setCategories] = useState([])
  const [cartItems, setCartItems] = useState(0)


  const notify = (msg, type) => {
    toast[type](msg)
  };
  function SaveUserData() {
    let token = localStorage.getItem("token")
    let decodedToken = jwtDecode(token)
    setUserData(decodedToken)
    
    localStorage.setItem("userId",decodedToken.sub)
  }
  function getAllCategories() {
    axios.get(`https://fakestoreapi.com/products/categories`).then((data) => {
      setCategories(data.data)

    }).catch((err) => {
      console.log(err);

    })
  }



  function getUserCart() {
    let userId=localStorage.getItem("userId")
    axios.get(`https://fakestoreapi.com/carts/${userId}`).then((data) => {
    
      setCartProducts(data.data.products)
      setCartItems(data.data.products.map(e => e.quantity))
    }).catch((err) => {

    })
  }
  function addProductToCart() {


    if (userData) {
      fetch('https://fakestoreapi.com/carts',{
        method:"POST",
        body:JSON.stringify(
            {
                userId:1,
                date:2024-2-3,
                products:[{productId:5,quantity:1},{productId:1,quantity:5}]
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
      notify("Added To Cart", "success")
    } else {
      notify("Log in First", "error")

    }
    

  }

  function logOut() {
    localStorage.removeItem("token")
    setUserData(null)
    return <Navigate to='/home' />
  }
  return <AuthContext.Provider value={{ SaveUserData, userData, logOut, getAllCategories, categories, setCategories, getUserCart, cartItems, addProductToCart,cartProducts }}>
    {children}
  </AuthContext.Provider>
}
