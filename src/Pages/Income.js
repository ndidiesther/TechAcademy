import React,{useState} from 'react';
import Navbar from '../Components/Navbar';
import Naira from "../Assets/Budget_Icons/naira.png";
import '../Styles/Income.css';
import { useNavigate } from 'react-router-dom';




const ManualTransaction = () => {

  const [inputValue, setInputValue] = useState('');


  const navigate = useNavigate()

  const handleButtonClick = (buttonName) => {
    navigate('/manualtransaction');
  }

  const handleButton2Click = () => {
    navigate('/income');
  };
  
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['Salary'];

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  

  const handleInputtChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButton1Click = () => {
    navigate('/');
  };



  

  return (
    <div>
      <Navbar />
      <br/>
      <div className="overage">
        <h1>Add a new Transaction</h1>

        <div className="togglebuttons">
          <button onClick={() => handleButtonClick('Expense')}>
            Expense
          </button>
          <button onClick={() => handleButton2Click('Income')}>
            Income
          </button>
        </div>
        <div className="forms">
          <form>
            <div>
              <input value={inputValue} onChange={handleInputtChange} type="text" placeholder="Amount" />
              <span><img src={Naira} alt='' /></span>
            </div>
            <div>
              <input value={inputValue} onChange={handleInputtChange} type="text" placeholder="Narration" />
              <span><img src={Naira} alt='' /></span>
            </div>

            <div>
              
              <select id="category" value={selectedCategory} onChange={handleChange}>
              <option value="" disabled selected>Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
        

            <div>
              <input value={inputValue} onChange={handleInputtChange} className="change" type="date" placeholder="Date" />
            </div>               
          </form>

        </div>

        <button className="buttontag" onClick={handleButton1Click}>Add Transaction</button>
        

        

      </div>
    </div>
  )
}

export default ManualTransaction;