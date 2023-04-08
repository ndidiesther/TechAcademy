import React, { useState } from 'react';
import './Navbar.css';



function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="button" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <nav>
          <ul>
            <li><a href="#">Hi</a></li>
            <li><a href="#">Sign up/Log in</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy and Terms</a></li>
            <li><a href="#">Account Upgrade</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;