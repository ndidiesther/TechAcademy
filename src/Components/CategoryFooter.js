import React, { useState } from "react";
import "../Styles/Footer.css";
import Chart from "../Assets/Budget_Icons/Chart.png";
import Budget from "../Assets/Budget_Icons/Accounting.png";
import ActiveCategory from "../Assets/Budget_Icons/activeCategory.png";
import Accounting from "../Assets/Budget_Icons/Accounting.png";
import { Link } from "react-router-dom";
import Logo from "../Assets/Budget_Icons/gtco_new.png";

const CategoryFooter = () => {
  return (
    <div className="footer">
      <div className="logo_new"  >
        <img src={Logo} alt="" />
        <p>GTCO</p>
      </div>
      <div className="footer-black">
        <Link to="/transaction">
          <div>
            <img src={Accounting} alt="" />
            <div>Transaction</div>
          </div>
        </Link>

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

        <div>
          <img src={ActiveCategory} alt="" />
          <div className="highlight-text ">Category</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFooter;
