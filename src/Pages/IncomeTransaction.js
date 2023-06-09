import React,{useState} from 'react';
import Navbar from '../Components/Navbar';
import Naira from "../Assets/Budget_Icons/naira.png";
import '../Styles/IncomeTransaction.css';
import { useNavigate } from 'react-router-dom';
import TransactionFooter from "../Components/TransactionFooter";




const IncomeTransaction = () => {

  const navigate = useNavigate()

  //dealing with input fields
  const [inputValue, setInputValue] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [inputDate, setInputDate] = useState('');

  const handleInputFieldChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInput2FieldChange = (event) => {
    setInput2Value(event.target.value);
  };

  const  handleInputDateField = (event) => {
    setInputDate(event.target.value);
  };


  const handleButtonExpenseClick = (buttonName) => {
    navigate('/expensetransaction');
  }

  const handleButtonIncomeClick = () => {
    navigate('/incometransaction');
  };
  
  //dealing with selection 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ['Salary'];
  const SelectChange = (event) => {
    setSelectedCategory(event.target.value);



  };

  
  //event listener for onSubmit
  const btnClickEventHandler = () => {
    const formData = {
      inputValue,
      input2Value,
      selectedCategory,
      inputDate
      
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/addnewtransactions');
  };


  

  return (
    <div>
      <Navbar />
      <br/>
      <div className="overage">
        <h1>Add a new Transaction</h1> <br />

        <div className="togglebuttons">
          <button className="septogglebuttons" onClick={() => handleButtonExpenseClick('Expense')}>
            Expense
          </button>
          <button className="septogglebuttons2 activeBut" onClick={() => handleButtonIncomeClick('Income')}>
            Income
          </button>
        </div>
        <div className="forms">
          <form>
            <div>
              <input value={inputValue} onChange={handleInputFieldChange} type="text" placeholder="Amount" />
              <span><img src={Naira} alt='' /></span>
            </div>
            <div>
              <input value={input2Value} onChange={handleInput2FieldChange} type="text" placeholder="Narration" />
            </div>

            <div>
              
              <select id="category" value={selectedCategory} onChange={SelectChange}>
              <option value="" disabled selected>Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
        

            <div>
              <input value={inputDate} onChange={handleInputDateField} className="change" type="date" placeholder="Date" />
            </div>   

            <button className="buttontag">Add Transaction</button>            
          </form>

        </div>
        

        

      </div>
      <TransactionFooter />
    </div>
  )
}

export default IncomeTransaction;