import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Budget from './Pages/Budget';
import Login from './Pages/Login';
import Createuser from './Pages/Createuser';
import Analysis from './Pages/Analysis';
import ExpenseTransaction from './Pages/ExpenseTransaction';
import IncomeTransaction from './Pages/IncomeTransaction';
import Transaction from './Pages/Transaction';
import Manual_Sync from "./Pages/Manual_Sync";
import Sync from "./Pages/Sync";
import Addnewtransactions from "./Pages/Addnewtransactions";
import Addnewbudget from "./Pages/Addnewbudget";
import Setbudget from "./Pages/Setbudget";
import Choosebudget from "./Pages/Choosebudget";
import Budgetcategories from "./Pages/Budgetcategories";

function App() {

  
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createuser' element={<Createuser />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/expensetransaction' element={<ExpenseTransaction />} />
        <Route path='/incometransaction' element={<IncomeTransaction />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/addnewtransactions' element={<Addnewtransactions />}/>
        <Route path='/manual_sync' element={<Manual_Sync />}/>
        <Route path='/sync' element={<Sync />}/>
        <Route path='/addnewbudget' element={<Addnewbudget />}/>
        <Route path='/setbudget' element={<Setbudget />}/>
        <Route path='/choosebudget' element={<Choosebudget />}/>
        <Route path='/budgetcategories' element={<Budgetcategories />}/>


      </Routes>
  
    </div>
  );
}

export default App;
