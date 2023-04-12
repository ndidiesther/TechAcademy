import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Budget from './Pages/Budget';
import Login from './Pages/Login';
import Createuser from './Pages/Createuser';
import Analysis from './Pages/Analysis';
<<<<<<< HEAD
import ManualTransaction from './Pages/ManualTransaction';
import Income from './Pages/Income';
=======
import Transaction from './Pages/Transaction';
import Category from './Pages/Category';
>>>>>>> c4f0463e669a08b35698ddfd07e1b5015f625044

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createuser' element={<Createuser />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/analysis' element={<Analysis />} />
<<<<<<< HEAD
        <Route path='/manualtransaction' element={<ManualTransaction />} />
        <Route path='/income' element={<Income />} />
=======
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/category' element={<Category />} />
>>>>>>> c4f0463e669a08b35698ddfd07e1b5015f625044


      </Routes>
  
    </div>
  );
}

export default App;
