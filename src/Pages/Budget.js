import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import BudgetFooter from "../Components/BudgetFooter";

const Budget = () => {



  return (
    <div>
      <Navbar />
      Budget
      
      <BudgetFooter />
    </div>
  );
};

export default Budget;
