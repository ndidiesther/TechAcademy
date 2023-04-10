import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Createuser.css";

const Createuser = () => {

    const navigate = useNavigate()

    const handleClick = (e) => {
        alert("Welcome,you have successfully created a GTbank account!.");
        navigate('/login');
    };
    

    return (
    <>
    <div className="all" style={{ backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundImage: "url(/icons/skyscrapper.jpg)" ,opacity:"1", positon:"relative", height: "100vh", width: "100%" }}>
        <div className="logo" style={{ backgroundRepeat:"no-repeat", backgroundImage: "url(/icons/gtcologo.png)", marginLeft:"170px", position:"absolute" ,top:"50px", height: "350px", width: "400px" }}></div>

        <div className="signup">
            <h3>Open an account instantly</h3>
            <br/>
            <h4>Select from a number of account choices, fill in your information and get an account number within minutes</h4>
            <br/>
            <button className="loginButton" onClick={handleClick} >Create new Account</button>

        </div>
    </div>
    
                
    </>
  )
}

export default Createuser;