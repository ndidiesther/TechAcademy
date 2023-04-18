import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import BudgetFooter from "../Components/BudgetFooter";
import TransactionFooter from "../Components/TransactionFooter";
import LeftArrow from "../Assets/Budget_Icons/caret_left.png"
import RightArrow from "../Assets/Budget_Icons/caret_right.png";
import "../Styles/style.css"
import "../Styles/Budget.css"
import Filter from "../Assets/Budget_Icons/filter.png";
import Add from "../Assets/Budget_Icons/Add.png";
import Estimates from "../Assets/Budget_Icons/Estimates.png";
import { Link } from 'react-router-dom';

const Budget = () => {



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

      <br/> 
      
      <div className="manualcategory2">
        <div>
          <h4>Total Budget</h4>
          <span>&#8358;0.00</span>
        </div>

        <div>
          <h4>Total Spent</h4>
          <span className="redspan">&#8358;0.00</span>
        </div>

        <div>
          <h4>Remaining</h4>
          <span>&#8358;0.00</span>
        </div> 
      </div>

      <div className="center1">
        <img src={Estimates} alt="" />
        <p>No budget have been applied for this month. Tap + to create a new budget</p>
      </div>

   

      <div className="rightwing2">
          <Link to="/addnewbudget"><img src={Add} alt="" /></Link>
      </div>


      <BudgetFooter />
    </div>
  );
};

export default Budget;
