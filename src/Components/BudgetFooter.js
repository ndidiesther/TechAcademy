import React, { useState } from "react";
import "../Styles/Footer.css";
import Chart from "../Assets/Budget_Icons/Chart.png";
import Category from "../Assets/Budget_Icons/Category.png";
import Accounting from "../Assets/Budget_Icons/Accounting.png";
import ActivityHistory from "../Assets/Budget_Icons/Activity_History.png";
import { Link } from "react-router-dom";

const BudgetFooter = () => {
  return (
    <div className="footer">
      <div className="footer-black">
        <Link to="/transaction">
          <div>
            <img src={Accounting} alt="" />
            <div className="highlight-text ">Transaction</div>
          </div>
        </Link>

        <Link to="/analysis">
          <div>
            <img src={Chart} alt="" />
            <div>Analysis</div>
          </div>
        </Link>

        <div>
          <img src={ActivityHistory} alt="" />
          <div>Budget</div>
        </div>

        <Link to="/category">
          <div>
            <img src={Category} alt="" />

            

          </div>
        </Link>
      </div>
    </div>
  );
};

export default BudgetFooter;
