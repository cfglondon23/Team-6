import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Auth from './Pages/Auth';
import BusinessAuth from './Pages/Business_Pages/BusinessAuth';
import UserAuth from './Pages/User_Pages/UserAuth';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Auth" element={<Auth/>} />
        <Route path="/Auth/business" element={<BusinessAuth/>} />
        <Route path='/Auth/User' element={<UserAuth/>} />
      </Routes>
    </Router>
  );
}

export default App;
