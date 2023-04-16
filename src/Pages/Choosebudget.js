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
import "../Styles/Choosebudget.css";
import Filter from "../Assets/Budget_Icons/filter.png";
import Add from "../Assets/Budget_Icons/Add.png";
import { Link } from 'react-router-dom';

const Choosebudget = () => {



  return (
    <div>
      <div className="choosedesign">
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
            <span>&#8358;100,000.00</span>
            </div>

            <div>
            <h4>Total Spent</h4>
            <span className="redspan">&#8358;0.00</span>
            </div>

            <div>
            <h4>Remaining</h4>
            <span>&#8358;100,000.00</span>
            </div> 
        </div>

        <br/>
        <br/>
        <br/>

        <div className="rightwing2">
            <Link to="/addnewbudget"><img src={Add} alt="" /></Link>
        </div>


        <BudgetFooter />
      </div>

      <div>
        <p>Set Budget</p>
        <div>
            <img src={Shopping} alt=""/>
            <p>Shopping</p>
        </div>

        <div>
            <p>Limit</p>
            <article>10,000</article>
        </div>
        <p>Month, April 2023</p>

        <div className="designbuttons">
            <Link to="/setbudget"><button>Cancel</button></Link>
        </div>

        <div className="designbuttons">
            <Link to="/budgetcategories"><button>Set</button></Link>
        </div>
      </div>

    </div>
  );
};

export default Choosebudget;