import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [acct_number, setAccountNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.name === 'acct_number') {
            setAccountNumber(e.target.value);
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value);
        }

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        let data = { acct_number,password,

        }

        data = JSON.stringify(data);

        let loginUser = async function (url, userData) {

            let response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: userData
            });

        }



    }
    

    return (
    <>
      <div className="all" style={{ backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundImage: "url(/icons/house_635VI.jpg)",opacity:"1", positon:"relative", height: "100vh", width: "100%" }}>
        <div className="wrapper">
        <div className="entry" style={{ backgroundRepeat:"no-repeat", backgroundImage: "url(/icons/gtworldicon.png)", marginLeft:"100px", position:"absolute" ,top:"50px", height: "350px", width: "400px" }}></div>
      </div>
        <div className="login">
            <div className="container">
                <div className="form">
                    <form onSubmit={handleSubmit} action="" method="POST">
                        <input type="text" placeholder="Enter Account number" onChange={handleChange}/>
                        <input type="password" placeholder="Password" onChange={handleChange} />

                        <button className="loginButton">
                            <Link to="/home" className="link">Login</Link>
                        </button>
                    
                    </form>

                </div>

                
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