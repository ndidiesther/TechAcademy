import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Budget from './Pages/Budget';
import Login from './Pages/Login';
import Createuser from './Pages/Createuser';
import Analysis from './Pages/Analysis';
import Transaction from './Pages/Transaction';
import Category from './Pages/Category';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createuser' element={<Createuser />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/category' element={<Category />} />


      </Routes>
  
    </div>
  );
}

export default App;
