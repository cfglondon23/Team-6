import React, {useState, useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Auth from './Pages/Auth';
import BusinessAuth from './Pages/Business_Pages/BusinessAuth';
import UserAuth from './Pages/User_Pages/UserAuth';
import Login from './Pages/Login';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Auth" element={<Auth/>} />
        <Route path="/Auth/business" element={<BusinessAuth/>} />
        <Route path='/Auth/User' element={<UserAuth/>} />
        <Route path="/Auth/Login" element={<Login/>}/>
      </Routes>
    </Router>

  );
}

export default App;
