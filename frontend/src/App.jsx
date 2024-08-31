import { useState } from 'react'
import './App.css'
import SIGNUP, { SignupPage } from './pages/Signup'
import SIGNIN, { SigninPage } from './pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'


function App() {
  const token = localStorage.getItem('token');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          { token ? <Route path="/" element={<Dashboard />} />:<Route path="/" element={<SIGNIN />} /> }
          { token ? <Route path="/dashboard" element={<Dashboard />} />: "You are not signed in" }
          <Route path="/signin" element={<SIGNIN />} />
          <Route path="/signup" element={<SIGNUP />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
