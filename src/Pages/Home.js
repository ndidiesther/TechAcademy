import React from 'react';
import Navbar from "./Navbar";
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const handleButton1Click = () => {
    navigate('/login');
  };

  const handleButton2Click = () => {
    console.log('Button 2 clicked');
  };

  return (
    <div className="all" style={{ backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundImage: "url(/icons/house_635VI.jpg)", height: "100vh", width: "100%" }}>
      <Navbar />
      <br/> 

      <div className="entry" style={{ backgroundRepeat:"no-repeat", backgroundImage: "url(/icons/gtcologo.png)", marginLeft:"10px" , height: "200px", width: "250px" }}></div>
       <br/> 
       <div>
        <img src="./icons/" alt=""/>

       </div>
       <br/>

      <div className="login">
        <button  className="login1" onClick={handleButton1Click}>Sign in GTWorld</button>
        <button className="login2" onClick={handleButton2Click}>Sign in GAPSLite</button>
      </div>
    </div>

   
  )
}

export default Home;