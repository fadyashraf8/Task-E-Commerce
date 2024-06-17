
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.jsx';
import MasterLayout from './Components/MasterLayout/MasterLayout.jsx';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import { ToastContainer } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Components/context/AuthContext.js';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import UserCart from './Components/UserCart/UserCart.jsx';




function App() {
  let{SaveUserData}=useContext(AuthContext)

  useEffect(() => {
    if (localStorage.getItem('token')!==null){
      SaveUserData()
    }
  }, [])

  let router = createHashRouter([
    {
      path: '/', element: <MasterLayout />, children: [
        { path: '/', element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'usercart', element: <UserCart /> },
        { path: 'products/:id', element: <ProductDetails /> },
        { path: 'login', element: <Login /> },
      ]
    }
  ])


  return (
    <>
      <ToastContainer theme='colored' />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
