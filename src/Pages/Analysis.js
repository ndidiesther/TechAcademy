import React from 'react'
import Navbar from '../Components/Navbar'
import AnalysisFooter from '../Components/AnalysisFooter'
import LeftArrow from "../Assets/Budget_Icons/caret_left.png"
import RightArrow from "../Assets/Budget_Icons/caret_right.png"

const Analysis = () => {
  return (
    <div>
        <Navbar />
        
        <div>

          <div>
            <img src={LeftArrow} alt="" />
            <img src={RightArrow} alt ="" />
          </div>
        </div>

        <AnalysisFooter />
    </div>
  )
}

export default Analysis