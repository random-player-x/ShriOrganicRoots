import { useState } from 'react'
import './App.css'
import SIGNUP, { SignupPage } from './pages/Signup'
import SIGNIN, { SigninPage } from './pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import PRODUCT  from './pages/ProductPage'
import PROFILEPAGE from './pages/UserProfilePage'


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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
