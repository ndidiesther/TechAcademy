import React,{useState} from 'react';
import Navbar from '../Components/Navbar';
import Naira from "../Assets/Budget_Icons/naira.png";
import '../Styles/ExpenseTransaction.css';
import { useNavigate } from 'react-router-dom';
import '../Styles/Addnewbudget.css';



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
        <div className="overage">
          <h1>Add a new budget</h1>
  
          <div className="forms">
            <form onSubmit={btnClickEventHandler}>
              <div>
                <input value={inputValue} onChange={handleInputFieldChange} type="text" placeholder="Amount" />
                <span><img src={Naira} alt='' /></span>
              </div>
              
              <div>
                <input value={inputDate} onChange={handleInputDateField} className="change" type="date" placeholder="Start Date" />
              </div>  
          
  
              <div>
                <input value={inputDate2} onChange={handleInputDateField2} className="change" type="date" placeholder="End Date" />
              </div>   
  
              <button className="buttontag">Next</button>            
            </form>
  
          </div>
          
  
          
  
        </div>
      </div>
    )
  }
  
  export default Addnewbudget;