import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import CategoryFooter from "../Components/CategoryFooter";
import { useNavigate } from "react-router-dom";
import "../Styles/Category.css";
import Add from "../Assets/Budget_Icons/Add.png";
import Salary from "../Assets/Budget_Icons/salary.png";


const IncomeCategory = () => {
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
                <img src={Salary} alt=""/>  
                <span className='separate2'>
                  <h4>Salary</h4>
                </span>
               
            </div>

                
        </div>
      </div>

      <CategoryFooter />
    </div>
  );
};

export default IncomeCategory;
