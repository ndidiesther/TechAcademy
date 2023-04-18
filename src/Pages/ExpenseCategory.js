import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import CategoryFooter from "../Components/CategoryFooter";
import { useNavigate } from "react-router-dom";
import "../Styles/Category.css";
import Add from "../Assets/Budget_Icons/Add.png";
import Shopping from "../Assets/Budget_Icons/shopping.png";
import Subscription from "../Assets/Budget_Icons/subscription.png";
import Transportation from "../Assets/Budget_Icons/transport.png";
import Health from "../Assets/Budget_Icons/Health.png";
import Education from "../Assets/Budget_Icons/Education.png";
import Entertainment from "../Assets/Budget_Icons/Entertainment.png"
import Food from "../Assets/Budget_Icons/food.png";

const ExpenseCategory = () => {
  const navigate = useNavigate();

  //dealing with input fields
  const [inputValue, setInputValue] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [inputDate, setInputDate] = useState("");

  const handleInputFieldChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInput2FieldChange = (event) => {
    setInput2Value(event.target.value);
  };

  const handleInputDateField = (event) => {
    setInputDate(event.target.value);
  };

  const handleButtonExpenseClick = (buttonName) => {
    navigate("/expensecategory");
  };

  const handleButtonIncomeClick = () => {
    navigate("/incomecategory");
  };

  //dealing with selection
  const [selectedCategory, setSelectedCategory] = useState("Shopping");
  const categories = [
    "Shopping",
    "Subscription",
    "Food",
    "Transportation",
    "Education",
    "Entertainment",
    "Health",
    "Drinks",
  ];
  const SelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //event listener for onSubmit
  const btnClickEventHandler = () => {
    //console.log("all data", inputValue,inputDate,selectedCategory);
    const formData = {
      inputValue,
      input2Value,
      selectedCategory,
      inputDate,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/addnewtransactions");
  };
  return (
    <div>
      <Navbar />

      <div className="category">
        <div className="togglebuttons">
          <button
            className="septogglebuttons activeBut"
            onClick={() => handleButtonExpenseClick("Expense")}
          >
            Expense
          </button>
          <button
            className="septogglebuttons2"
            onClick={() => handleButtonIncomeClick("Income")}
          >
            Income
          </button>
        </div>

        <div className="category-div">
          <p>These are the categories available</p>
          <div>
            <img className="addnewCat" src={Add} alt="" />
            <span>Add New Category</span>
          </div>
        </div>
      </div>
      <div className="custom">
        <p >Custom</p>
        <p>Hmm, you have no custom category</p>
      </div>
      <div className="custom">
        <p >Default</p>
        <div className="recenttransaction5">
            <div className="recenttransaction6">
                <img src={Shopping} alt=""/>  
                <span className='separate2'>
                  <h4>Shopping</h4>
                </span>

               
            </div>
                
        </div>

        <div className="recenttransaction5">
            <div className="recenttransaction6">
                <img src={Subscription} alt=""/>  
                <span className='separate2'>
                  <h4>Subscription</h4>
                </span>
               
            </div>

                
        </div>
        <div className="recenttransaction5">
            <div className="recenttransaction6">
                <img src={Food} alt=""/>  
                <span className='separate2'>
                  <h4>Food</h4>
                </span>
               
            </div>

                
        </div>
        <div className="recenttransaction5">
            <div className="recenttransaction6">
                <img src={Entertainment} alt=""/>  
                <span className='separate2'>
                  <h4>Entertainment</h4>
                </span>
              
            </div>

                
        </div>
        <div className="recenttransaction5">
            <div className="recenttransaction6">
                <img src={Education} alt=""/>  
                <span className='separate2'>
                  <h4>Education</h4>
                </span>
             
            </div>

                
        </div>
        <div className="recenttransaction5">
            <div className="recenttransaction6">
                <img src={Health} alt=""/>  
                <span className='separate2'>
                  <h4>Health</h4>
                </span>
               
            </div>

                
        </div>
      </div>

      <CategoryFooter />
    </div>
  );
};

export default ExpenseCategory;
