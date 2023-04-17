import React from "react";
import Navbar from "../Components/Navbar";
import TransactionFooter from "../Components/TransactionFooter";
import LeftArrow from "../Assets/Budget_Icons/caret_left.png"
import RightArrow from "../Assets/Budget_Icons/caret_right.png";
import "../Styles/style.css"
import Filter from "../Assets/Budget_Icons/filter.png";
import EmptyTransaction from "../Assets/Budget_Icons/budget.png"
import Add from "../Assets/Budget_Icons/Add.png";
import { Link } from "react-router-dom";

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

      <div className="empty_trans">
        <img src={EmptyTransaction} alt="" />
        <p>No record in this month. Tap + to add new expense or income</p>
      </div>
      <div className="rightwing2">
          <Link to="/addnewbudget"><img src={Add} alt="" /></Link>
      </div>
      <TransactionFooter />
    </div>
  );
};

export default Transaction;
