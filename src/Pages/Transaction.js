import React from "react";
import Navbar from "../Components/Navbar";
import TransactionFooter from "../Components/TransactionFooter";
import LeftArrow from "../Assets/Budget_Icons/caret_left.png"
import RightArrow from "../Assets/Budget_Icons/caret_right.png";
import "../Styles/style.css"
import Filter from "../Assets/Budget_Icons/filter.png"

const Transaction = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="top-date">
          <img src={LeftArrow} alt="" />
          <span >April, 2023</span>
          <img src={RightArrow} alt="" />
          <img className="filter" src ={Filter} alt="" />
        </div>
      </div>
      <TransactionFooter />
    </div>
  );
};

export default Transaction;
