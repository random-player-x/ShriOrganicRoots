import { useState } from 'react'
import './App.css'
import SIGNUP from './pages/Signup'
import SIGNIN from './pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import PRODUCT  from './pages/ProductPage'
import PROFILEPAGE from './pages/UserProfilePage'
import CARTPAGE from './pages/CartPage'
import OrderPage from './pages/Myorders'

import ADMINPROFILEPAGE from './pages/AdminProfilePage'
import Orders from './components/Orders'
import USERS from './components/Users'
import CHECKOUTPAGE, { CheckOutPage } from './pages/CheckOutPage'
import MYORDERSPAGE from './pages/Myorders'
import { Error404Page } from './pages/Error404Page'


function App() {
  const token = localStorage.getItem('token');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          { token ? <Route path="/" element={<Dashboard />} />:<Route path="/" element={<SIGNIN />} /> }
          <Route path="/signin" element={<SIGNIN />} />
          <Route path="/signup" element={<SIGNUP />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path = '/productpage/:id' element={<PRODUCT/>} />
          <Route path = "/Userprofile" element = {<PROFILEPAGE/>}/>
          <Route path = "/cart" element = {<CARTPAGE/>}/>
          <Route path = "/admin" element = {<ADMINPROFILEPAGE/>}/>
          <Route path = "/orders" element={<Orders/>} />
          <Route path = "/Users" element={<USERS/>} />
          <Route path = "/checkout" element={<CHECKOUTPAGE/>} />
          <Route path = "/myorders" element={<MYORDERSPAGE/>} />
          <Route path = "/pagenotfound" element={<Error404Page/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
