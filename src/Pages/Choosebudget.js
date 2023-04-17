import React,{useState} from "react";
import Navbar from "../Components/Navbar";
import BudgetFooter from "../Components/BudgetFooter";
import LeftArrow from "../Assets/Budget_Icons/caret_left.png";
import RightArrow from "../Assets/Budget_Icons/caret_right.png";
import Shopping from "../Assets/Budget_Icons/shopping.png";
import Subscription from "../Assets/Budget_Icons/subscription.png";
import Food from "../Assets/Budget_Icons/food.png";
import "../Styles/style.css";
import "../Styles/Budget.css";
import "../Styles/Choosebudget.css";
import Filter from "../Assets/Budget_Icons/filter.png";
import Add from "../Assets/Budget_Icons/Add.png";
import { Link,useNavigate } from 'react-router-dom';

const Choosebudget = () => {
  const navigate = useNavigate();

  const Data = JSON.parse(localStorage.getItem('Data'));

  const [input3Value, setInput3Value] = useState('');


  const handleInput3FieldChange = (event) => {
    setInput3Value(event.target.value);
  };

  const SetClickEventHandler = () => {
    console.log("all data",input3Value);
    const InputData = {
      input3Value,
    };
    localStorage.setItem('InputData', JSON.stringify(InputData));
    navigate('/budgetcategories');
  };


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
        <br/>
        <br/>

        <div className="rightwing2">
            <Link to="/addnewbudget"><img src={Add} alt="" /></Link>
        </div>


        <BudgetFooter />
      </div>

      <form className="draw" onSubmit={SetClickEventHandler}>
        <p className="drawcentered1">Set Budget</p>
        <br/>
        <div className="centered">
            <img src={Shopping} alt=""/>
            <p>Shopping</p>
        </div>

        <br/>
        <br/>
        
        <div className="centered2">
          <p>Limit</p>
          <input value={input3Value} onChange={handleInput3FieldChange} type="text" />
        </div>
        <br/>
        
        <p className="drawcentered">Month, April 2023</p>

        <div className="apart">
          <div className="designbuttons">
            <Link to="/setbudget"><button>Cancel</button></Link>
          </div>

          <div className="designbuttons">
            <button className="designbuttons">Set</button>
          </div>
            
            
        </div>

        
      </form>

    </div>
  );
};

export default Choosebudget;