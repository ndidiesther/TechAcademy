import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Budget from './Pages/Budget';
import Login from './Pages/Login';
import Createuser from './Pages/Createuser';
import Analysis from './Pages/Analysis';
import ManualTransaction from './Pages/ManualTransaction';
import Income from './Pages/Income';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createuser' element={<Createuser />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/manualtransaction' element={<ManualTransaction />} />
        <Route path='/income' element={<Income />} />


      </Routes>
  
    </div>
  );
}

export default App;
