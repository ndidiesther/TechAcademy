import React from "react";
import Navbar from "../Components/Navbar";
import AnalysisFooter from "../Components/AnalysisFooter";
import LeftArrow from "../Assets/Budget_Icons/caret_left.png";
import RightArrow from "../Assets/Budget_Icons/caret_right.png";
import Filter from "../Assets/Budget_Icons/filter.png";
import Add from "../Assets/Budget_Icons/Add.png";
import EmptyAnalysis from "../Assets/Budget_Icons/line_chart.png";
import { Link } from "react-router-dom";

const Analysis = () => {
  return (
    <div>
      <Navbar />

      <div>
        <div>
          <img src={LeftArrow} alt="" />
          <img src={RightArrow} alt="" />
        </div>
      </div>
      <div className="analysis-content">
        <div className="top-date">
          <img src={LeftArrow} alt="" />
          <span>April, 2023</span>
          <img src={RightArrow} alt="" />
          <img className="filter" src={Filter} alt="" />
        </div>
      </div>

      <div className="empty_trans">
        <img src={EmptyAnalysis} alt="" />
        <p>No analysis for this month</p>
      </div>
      <div className="rightwing2">
        <Link to="/addnewbudget">
          <img src={Add} alt="" />
        </Link>
      </div>

      <AnalysisFooter />
    </div>
  );
};

export default Analysis;
