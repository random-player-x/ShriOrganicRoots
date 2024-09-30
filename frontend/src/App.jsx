import { useState } from 'react'
import './App.css'
import SIGNUP, { SignupPage } from './pages/Signup'
import SIGNIN, { SigninPage } from './pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import PRODUCT  from './pages/ProductPage'
import PROFILEPAGE from './pages/UserProfilePage'
import CARTPAGE from './pages/CartPage'
<<<<<<< HEAD

=======
import ADMINPROFILEPAGE from './pages/AdminProfilePage'
import Orders from './components/Orders'
import USERS from './components/Users'
>>>>>>> 76c43bdd5d23629fa94d0f2b6856e5aacad4088c

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
