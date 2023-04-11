import React from 'react'
import '../Styles/Navbar.css'
import BackArrow from "../Assets/Budget_Icons/arrow.png"
import Help from "../Assets/Budget_Icons/help.png"

const Navbar = () => {
  return (
    <div className='navContainer'>
      <div>
        <img src={BackArrow} alt=""  />
      </div>
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