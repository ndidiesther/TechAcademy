import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Createuser.css";
import Logo from "../Assets/Budget_Icons/gtcologo.png";

const Createuser = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    alert("Welcome,you have successfully created a GTbank account!.");
    navigate("/login");
  };

  return (
    <div className="createuser">
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="entry-login">
          <img className="gtlg logo" src={Logo} alt="" />
        </div>

        <div className="signup">
          <h3>Open an account instantly</h3>
          <br />
          <p>
            Select from a number of account choices, fill in your information
            and get an account number within minutes
          </p>
          <br />  <br />
          <button type="submit" className="createButton" onClick={handleClick}>
            Create new Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createuser;
