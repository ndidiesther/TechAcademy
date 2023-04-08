import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [acc_number, setAccountNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

    };
    

    return (
    <>
      <div className="all" style={{ backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundImage: "url(/icons/house_635VI.jpg)",opacity:"1", positon:"relative", height: "100vh", width: "100%" }}>
        <div className="wrapper">
        <div className="entry" style={{ backgroundRepeat:"no-repeat", backgroundImage: "url(/icons/gtworldicon.png)", marginLeft:"100px", position:"absolute" ,top:"50px", height: "350px", width: "400px" }}></div>
      </div>
        <div className="login">
            <div className="container">
                <div className="form">
                    <form>
                        <input
                            type="email"
                            placeholder="Enter Account number"
                            onChange={(e) => setAccountNumber(e.target.value)}
                        />
                       <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    
                    </form>

                </div>

                <button className="loginButton" onClick={handleLogin}>
                    <Link to="/home" className="link">Login</Link>
                </button>
                <div className="passwordlink">
                    <Link to="/" className="link1">Forgot password?</Link>
                    <Link to="/" className="link2">Sign Up</Link>
                </div>
            </div>
        </div>

      </div>
      
    </>
  )
}

export default Login;