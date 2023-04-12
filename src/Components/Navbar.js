import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Navbar.css'
import BackArrow from "../Assets/Budget_Icons/arrow.png"
import Help from "../Assets/Budget_Icons/help.png"


const Navbar = () => {
  const navigate = useNavigate

  const goback = () =>{
    navigate('/analysis')
  }



  const handleClick = (e) => {
      alert("Welcome,you have successfully created a GTbank account!.");
      navigate('/login');
  };
  return (
    <div className='navContainer'>
      <Link to ="/login">
      <div>
        <img src={BackArrow} alt=""  />
      </div>
      </Link>
    
      
      
      <div>
        <p>Budget Tracker</p>
      </div>
      <div>
        <img src={Help} alt='' />
      </div>
    </div>
  )
}

export default Navbar