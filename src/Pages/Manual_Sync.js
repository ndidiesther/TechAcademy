import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Sync from "../Assets/Budget_Icons/sync.png";
import Transaction from "../Assets/Budget_Icons/transaction.png";
import Cancel from "../Assets/Budget_Icons/cancel.png";
import '../Styles/Manual_Sync.css';



const Manual_Sync = () => {

  

  

  return (
    <>
    <Navbar />
    <div className="shifttransaction">
        
        <div className="separatetransaction">
            <p>manualtransaction</p>
            <Link to="/expensetransaction"><img src={Transaction} alt=""/></Link>
        </div>

        <div className="separatesync">
            <p>Sync with account</p>
            <Link to="/sync"><img src={Sync} alt=""/></Link>
        </div>

        <div className="separatecancel">
            <Link to="/transaction"><img src={Cancel} alt=""/></Link>
        </div>
    </div>
    </>
    
      
  )
}

export default Manual_Sync;