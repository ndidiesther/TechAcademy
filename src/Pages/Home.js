import React from 'react';
import Navbar from "./Navbar";
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const handleButton1Click = () => {
    navigate('/login');
  };

  return (
    <div className="home">
      <div className="entry" style={{ backgroundRepeat:"no-repeat", backgroundImage: "url(/icons/gtcologo.png)", marginLeft:"200px", marginTop:"100px", height: "350px", width: "400px" }}>
      <div className="login">
        <button  className="login1" onClick={handleButton1Click}>Sign in to your account</button>
      </div>
      </div>
    </div>

   
  )
}

  

export default Home;
