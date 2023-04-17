import React, { useState } from "react";
import "../Styles/Login.css";
import Logo from "../Assets/Budget_Icons/gtcologo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validUsers = ["Kingsley", "Victor", "Ojei", "Esther", "Semilore"];
    const validPasswords = [
      "Kingsley123",
      "Victor123",
      "Ojei123",
      "Esther123",
      "Semilore123",
    ];
    const isValidUser = validUsers.includes(username);
    console.log(validUsers);
    const isValidPassword = validPasswords.includes(password);
    if (isValidUser && isValidPassword) {
      alert("Login successful!");
      navigate("/transaction");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="loginall">
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="entry-login">
          <img className="gtlg logo" src={Logo} alt="" />
        </div>

        <div className="login">
          <div className="container">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="arrange">
                  <input
                    type="text"
                    placeholder="Enter email address/account number"
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
                    <Link to="" className="link1">
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
