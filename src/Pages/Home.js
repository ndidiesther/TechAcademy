import React from "react";
import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/Budget_Icons/gtcologo.png"

const Home = () => {
  const navigate = useNavigate();

  const handleButton1Click = () => {
    navigate("/login");
  };

  return (
    <div className="home">
      <div className="overlay"></div>
      <div
        className="entry"
        // style={{
        //   backgroundRepeat: "no-repeat",
        //   backgroundImage: "url(/Icons/GTCO-60.png)",
        //   height: "100%",
        //   width: "40%",
        // }}
      >
        < img className="logo" src={Logo} alt="" />
        <div className="login">
          <button className="login1" onClick={handleButton1Click}>
            Sign in to your account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
