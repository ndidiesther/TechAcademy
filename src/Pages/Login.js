import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
import Logo from "../Assets/Budget_Icons/gtcologo.png"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //const navigate = useNavigate()

  /*const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch('http://22a4-102-89-22-182.ngrok-free.app/api/UserIds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await response.json();
      console.log(data);
      if (data.ok) {
        // Username and password are correct, navigate to another page
        alert('Invalid username or password');
        navigate('/ ');
      } else {
        // Username and/or password are incorrect, display error message
        alert("Welcome");
        navigate('/dashboard');
      }
    };
    */

  return (
    <div className="loginall">
      <div className="overlay"></div>
      <div className="wrapper">
        <div
          className="entry-login"
          
          // style={{
          //   backgroundRepeat: "no-repeat",
          //   backgroundImage: "url(/Icons/GTCO-60.png)",
          //   marginLeft: "260px",
          //   position: "absolute",
          //   top: "180px",
          //   height: "400px",
          //   width: "400px",
          // }}
        >
            < img className="gtlg logo" src={Logo} alt="" />
        </div>

        <div className="login">
          <div className="container">
            <div>
              <form>
                <div className="arrange">
                  <input
                    type="text"
                    placeholder="Enter Account number"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />

                  <button className="loginButton">
                    <Link to="/transaction" className="link1">
                      Login
                    </Link>
                  </button>
                </div>
              </form>
            </div>

            <div className="passwordlink">
              <div>
                <Link to="/createuser" className="link3">
                  Create New User
                </Link>
              </div>
              <span>
                <Link to="/" className="link2">
                  Forgot Password?
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
