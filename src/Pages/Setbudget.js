import React from "react";
import Navbar from "../Components/Navbar";
import BudgetFooter from "../Components/BudgetFooter";
import LeftArrow from "../Assets/Budget_Icons/caret_left.png"
import RightArrow from "../Assets/Budget_Icons/caret_right.png";
import Shopping from "../Assets/Budget_Icons/shopping.png";
import Subscription from "../Assets/Budget_Icons/subscription.png";
import Food from "../Assets/Budget_Icons/food.png";
import "../Styles/style.css";
import "../Styles/Budget.css";
import "../Styles/Setbudget.css";
import Filter from "../Assets/Budget_Icons/filter.png";
import Add from "../Assets/Budget_Icons/Add.png";
import { Link } from 'react-router-dom';

const Setbudget = () => {

  const Data = JSON.parse(localStorage.getItem('Data'));

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
          <span>&#8358;{Data.inputValue}</span>
        </div>

        <div>
          <h4>Total Spent</h4>
          <span className="redspan">&#8358;0.00</span>
        </div>

        <div>
          <h4>Remaining</h4>
          <span>&#8358;{Data.inputValue}</span>
        </div> 
      </div>

      <br/>

      <div className="center2"> 
        <h2>Budget Categories: April, 2023</h2>
        <h6>Currently, no budget category is applied for this month. Begin by setting budget limit for this month</h6>
        <h6>Not budgeted this month</h6>
      </div>

      <br/>

      <div>
        <div className="recenttransaction3">
            <div className="recenttransaction4">
                <img src={Shopping} alt=""/>  
                <span className='separate2'>
                  <h4>Shopping</h4>
                </span>

                <div className="designbuttons">
                    <Link to="/choosebudget"><button>Set Budget</button></Link>
                </div>
            </div>
                
        </div>

        <div className="recenttransaction3">
            <div className="recenttransaction4">
                <img src={Subscription} alt=""/>  
                <span className='separate2'>
                  <h4>Subscription</h4>
                </span>
                <div className="designbuttons">
                    <Link to="/choosebudget"><button>Set Budget</button></Link>
               
                </div>
            </div>

                
        </div>

      </div>

      <div className="rightwing2">
          <Link to="/addnewbudget"><img src={Add} alt="" /></Link>
      </div>


      <BudgetFooter />
    </div>
  );
};

export default Setbudget;