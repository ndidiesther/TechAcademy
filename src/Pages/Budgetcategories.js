import React from "react";
import Navbar from "../Components/Navbar";
import BudgetFooter from "../Components/BudgetFooter";
import LeftArrow from "../Assets/Budget_Icons/caret_left.png"
import RightArrow from "../Assets/Budget_Icons/caret_right.png";
import Shopping from "../Assets/Budget_Icons/shopping.png";
import "../Styles/style.css";
import "../Styles/Budgetcategories.css";
import "../Styles/Setbudget.css";
import Filter from "../Assets/Budget_Icons/filter.png";
import Add from "../Assets/Budget_Icons/Add.png";
import { Link } from 'react-router-dom';

const Budgetcategories = () => {


  const InputData= JSON.parse(localStorage.getItem('InputData'));
  const Data= JSON.parse(localStorage.getItem('Data'));

  //formData for total spent category
  const formData= JSON.parse(localStorage.getItem('formData'));
  
  

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
          <span className="redspan">&#8358;{formData.InputValue}</span>
        </div>

        <div>
          <h4>Remaining</h4>
          <span>&#8358;{Data.inputValue}</span>
        </div> 
      </div>

      <br/>

      <div className="center2"> 
        <h2>Budget Categories: April, 2023</h2>
      </div>

      <br/>

      <div>
        <div className="recenttransactional">
            <div className="recenttransactional2">
                <img src={Shopping} alt=""/>  
                <span className='separatemiddle'>
                  <h2>Shopping</h2>
                  <h4>Limit:&#8358;{InputData.input3Value}</h4>
                  <h4>Spent:&#8358;0.00</h4>
                  <h4>Remaining:&#8358;{InputData.input3Value}</h4>
                </span>

                <div className="greendot">
                    <p>...</p>
                    <h6>(Apr, 2023)</h6>
               
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

export default Budgetcategories;