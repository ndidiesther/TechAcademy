import React, { useState } from "react";
import "../Styles/Footer.css";
import Transaction from "../Assets/Budget_Icons/Activity_History.png";
import Chart from "../Assets/Budget_Icons/Chart.png";
import Budget from "../Assets/Budget_Icons/Accounting.png";
import Category from "../Assets/Budget_Icons/Category.png";
import { Link } from "react-router-dom";
import Logo from "../Assets/Budget_Icons/gtco_new.png";

const TransactionFooter = () => {
  return (
    <div className="footer">

      <div className="logo_new"  >
        <img src={Logo} alt="" />
        <p>GTCO</p>
      </div>
      <div className="footer-black">
        <div>
          <img src={Transaction} alt="" />
          <div className="highlight-text ">Transaction</div>
        </div>

        <Link to="/analysis">
          <div>
            <img src={Chart} alt="" />
            <div>Analysis</div>
          </div>
        </Link>
        <Link to="/budget">
          <div>
            <img src={Budget} alt="" />
            <div>Budget</div>
          </div>
        </Link>

        <Link to="/category">
          <div>
            <img src={Category} alt="" /> 
            <div>Category</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TransactionFooter;
