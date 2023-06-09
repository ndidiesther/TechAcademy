import React,{useState} from 'react';
import Navbar from '../Components/Navbar';
import Naira from "../Assets/Budget_Icons/naira.png";
import '../Styles/ExpenseTransaction.css';
import { useNavigate } from 'react-router-dom';
import '../Styles/Addnewbudget.css';
import BudgetFooter from '../Components/BudgetFooter';



const Addnewbudget = () => {

    const navigate = useNavigate()
  
    //dealing with input fields
    const [inputValue, setInputValue] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputDate2, setInputDate2] = useState('');
  
    const handleInputFieldChange = (event) => {
      setInputValue(event.target.value);
    };

  
    const  handleInputDateField = (event) => {
      setInputDate(event.target.value);
    };

    const  handleInputDateField2 = (event) => {
        setInputDate2(event.target.value);
      };
  
  
    
    
    //event listener for onSubmit
    const btnClickEventHandler = () => {
      console.log("all data", inputValue,inputDate,inputDate2);
      const Data = {
        inputValue
      };
      localStorage.setItem('Data', JSON.stringify(Data));
      navigate('/setbudget');
    };
  
  
  
    
  
    return (
      <div>
        <Navbar />
        <br/>
        <div className="overage addnew">
          <h1>Add a new budget</h1>
  
          <div className="forms">
            <form onSubmit={btnClickEventHandler}>
              <div>
                <p className='inputLabel'>Budget Amount</p>
                <input className='inputForm' value={inputValue} onChange={handleInputFieldChange} type="text" placeholder="Amount" />
                <span><img src={Naira} alt='' /></span>
              </div>
              
              <div>
              <p className='inputLabel'>Start Date</p>
                <input  className='inputForm change' value={inputDate} onChange={handleInputDateField}  type="date" placeholder="Start Date" />
              </div>  
          
  
              <div>
              <p className='inputLabel'>End Date</p>
                <input className='inputForm change' value={inputDate2} onChange={handleInputDateField2}  type="date" placeholder="End Date" />
              </div>   
  
              <br />
              <button  className="buttontag">Next</button>            
            </form>
  
          </div>
          
  
          
  
        </div>
        <BudgetFooter />
      </div>
    )
  }
  
  export default Addnewbudget;