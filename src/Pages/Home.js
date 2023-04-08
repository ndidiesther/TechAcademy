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
    <div className="all" style={{ backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundImage: "url(/icons/house_635VI.jpg)", height: "100%", width: "100%" }}>
      <Navbar />
      <br/> 

      <div className="entry" style={{ backgroundRepeat:"no-repeat", backgroundImage: "url(/icons/GTworldicon.png)", marginLeft:"40px" , height: "350px", width: "400px" }}></div>
      <h3>GTWorld</h3>
       <br/> 
      <div className="prelogin_icons">
        <section>
          <div>
            <img src="./icons/QuickBalanceIcon.png" alt=""/>
            <h5>Quick Balance</h5>
          </div>
          <div>
            <img src="./icons/QuickTransferIcon.png" alt=""/>
            <h5>Quick Transfer</h5>
          </div>
          <div>
            <img src="./icons/QuickAirtimeIcon.png" alt=""/>
            <h5>Quick Airtime</h5>
          </div>

        </section>

        <section>
          <div>
            <img src="./icons/SoftTokenIcon.png" alt=""/>
            <h5>Soft token</h5>
          </div>
          <div>
            <img src="./icons/AccountManagerIcon.png" alt=""/>
            <h5>Account Manager</h5>
          </div>
          <div>
            <img src="./icons/OpenAccountIcon.png" alt=""/>
            <h5>Open Account</h5>
          </div>

        </section>

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