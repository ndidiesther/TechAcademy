import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import TransactionFooter from '../Components/TransactionFooter';
import { Link } from 'react-router-dom';
import LeftArrow from "../Assets/Budget_Icons/caret_left.png"
import RightArrow from "../Assets/Budget_Icons/caret_right.png";
import Shopping from "../Assets/Budget_Icons/shopping.png";
import Subscription from "../Assets/Budget_Icons/subscription.png";
import Food from "../Assets/Budget_Icons/food.png";
import Add from "../Assets/Budget_Icons/Add.png";
import "../Styles/style.css"
import Filter from "../Assets/Budget_Icons/filter.png";
import '../Styles/Addnewtransactions.css';



const Addnewtransactions = () => {

  const formData = JSON.parse(localStorage.getItem('formData'));

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
          <br/>

          <div className="manualcategory">
            <div>
              <h4>Expense</h4>
              <div className="redspan">&#8358;19,000.00</div>
            </div>

            <div>
              <h4>Income</h4>
              <span>&#8358;250,000.00</span>
            </div>

            <div>
              <h4>Total</h4>
              <span>&#8358;231,000.00</span>
            </div> 
          </div>

          <div className="recenttransaction">Recent Transaction</div>

          <br/>

          <div className="allcapture">
            <div className="recenttransaction2">
              <div className="recenttransaction3">
                <img src={Shopping} alt=""/>  
                <span className='separate'>
                  <p>Shopping</p>
                  <h4>9th April,2023</h4>
                </span>
              </div>

              <br/>

              <div>
                <span className="redspan2">&#8358;-4,000.00</span>
                <h4>10:00AM</h4>
              </div>
                
            </div>


            <div className="recenttransaction2">
              <div className="recenttransaction3">  
                <img src={Shopping} alt=""/>  
                {formData && (
                <span className='separate'>
                  <p>{formData.selectedCategory}</p>
                  <h4>{formData.inputDate}</h4>
                </span>
                )}
              </div>

              <br/>
              <div>
                <span className='greenspan2'>&#8358;{formData.inputValue}</span>
              </div>
                
            </div>




          </div>
            

        </div>

        <div className="rightwing">
          <Link to="/manual_sync"><img src={Add} alt="" /></Link>
        </div>

          
    

        
        
        <TransactionFooter />
      </div>
  )
}

export default Addnewtransactions;