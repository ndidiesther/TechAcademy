import React, { useState } from "react";
import "../Styles/Footer.css";
import Transaction from "../Assets/Budget_Icons/Activity_History.png";
import Analysis from "../Assets/Budget_Icons/analysis.png";
import Chart from "../Assets/Budget_Icons/Chart.png";
import Budget from "../Assets/Budget_Icons/Accounting.png";
import Category from "../Assets/Budget_Icons/Category.png";
import Accounting from "../Assets/Budget_Icons/Accounting.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [active, setActive] = useState(1);

  const navigate = useNavigate;
  const TransactionPage = () => {
    setActive(1);
    console.log("Analysis");
  };

  const AnalysisPage = () => {
    setActive(2);
    console.log("Analysis");
  };

  const BudgetPage = () => {
    setActive(3);
  };

  return (
    <div className="footer">
      {active == 1 ? (
        <div className="footer-black">
          <div>
            <img src={Transaction} alt="" />
          </div>

          <Link to="/analysis">
            <div onClick={AnalysisPage}>
              <img src={Chart} alt="" />
            </div>
          </Link>

          <div onClick={BudgetPage}>
            <img src={Budget} alt="" />
          </div>
          <div>
            <img src={Category} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
      {active == 2 ? (
        <div className="footer-black">
          <div onClick={TransactionPage}>
            <img src={Accounting} alt="" />
          </div>

          <div onClick={AnalysisPage}>
            <img src={Analysis} alt="" />
          </div>

          <div>
            <img src={Budget} alt="" />
          </div>
          <div>
            <img src={Category} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
