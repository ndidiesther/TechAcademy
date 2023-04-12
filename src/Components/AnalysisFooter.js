import React, { useState } from "react";
import "../Styles/Footer.css";
import Transaction from "../Assets/Budget_Icons/Activity_History.png";
import Analysis from "../Assets/Budget_Icons/analysis.png";
import Chart from "../Assets/Budget_Icons/Chart.png";
import Budget from "../Assets/Budget_Icons/Accounting.png";
import Category from "../Assets/Budget_Icons/Category.png";
import Accounting from "../Assets/Budget_Icons/Accounting.png";
import { Link } from "react-router-dom";

const AnalysisFooter = () => {
  return (
    <div className="footer">
      <div className="footer-black">
        <Link to="/transaction">
          <div>
            <img src={Accounting} alt="" />
          </div>
        </Link>

        <div>
          <img src={Analysis} alt="" />
        </div>

        <Link to="/budget">
          <div>
            <img src={Budget} alt="" />
          </div>
        </Link>

        <Link to="/category">
          <div>
            <img src={Category} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalysisFooter;
