import React, { useState } from "react";
import "../Styles/Footer.css";
import Chart from "../Assets/Budget_Icons/Chart.png";
import Budget from "../Assets/Budget_Icons/Accounting.png";
import ActiveCategory from "../Assets/Budget_Icons/activeCategory.png";
import Accounting from "../Assets/Budget_Icons/Accounting.png";
import { Link } from "react-router-dom";

const CategoryFooter = () => {
  return (
    <div className="footer">
      <div className="footer-black">
        <Link to="/transaction">
          <div>
            <img src={Accounting} alt="" />
          </div>
        </Link>

        <Link to="/analysis">
          <div>
            <img src={Chart} alt="" />
          </div>
        </Link>

        <Link to="/budget">
          <div>
            <img src={Budget} alt="" />
          </div>
        </Link>

        <div>
          <img src={ActiveCategory} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CategoryFooter;
