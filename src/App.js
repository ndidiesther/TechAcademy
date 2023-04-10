import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Budget from './Pages/Budget';
import Login from './Pages/Login';
import Createuser from './Pages/Createuser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createuser' element={<Createuser />} />
        <Route path='/budget' element={<Budget />} />


      </Routes>
  
    </div>
  );
}

export default App;
