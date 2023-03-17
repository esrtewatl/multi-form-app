import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import YourInfo from './YourInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';
import Summary from './Summary';

const components = [
  <YourInfo />,
  <SelectPlan />,
  <AddOns />,
  <Summary />,
];

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber - 1);
  };

  return (
    
    <nav className="aside">
      <div className="circle-buttons-container">
        <div className="button-wrapper">
          <Link to="/YourInfo">
            <button
              className={`circle-button ${activeButton === 0 ? 'active' : ''}`}
              onClick={() => handleButtonClick(1)}
            >
              1
            </button>
            <span className="button-text">
              <span className="lil_guy">Step 1</span>
              <br />
              YOUR INFO
            </span>
          </Link>
        </div>
        <div className="button-wrapper">
          <Link to="/SelectPlan">
            <button
              className={`circle-button ${activeButton === 1 ? 'active' : ''}`}
              onClick={() => handleButtonClick(2)}
            >
              2
            </button>
            <span className="button-text">
              <span className="lil_guy">Step 2</span>
              <br />
              SELECT PLAN
            </span>
          </Link>
        </div>
        <div className="button-wrapper">
          <Link to="/AddOns">
            <button
              className={`circle-button ${activeButton === 2 ? 'active' : ''}`}
              onClick={() => handleButtonClick(3)}
            >
              3
            </button>
            <span className="button-text">
              <span className="lil_guy">Step 3</span>
              <br />
              ADD-ONS
            </span>
          </Link>
        </div>
        <div className="button-wrapper">
          <Link to="/Summary">
            <button
              className={`circle-button ${activeButton === 3 ? 'active' : ''}`}
              onClick={() => handleButtonClick(4)}
            >
              4
            </button>
            <span className="button-text">
              <span className="lil_guy">Step 4</span>
              <br />
              SUMMARY
            </span>
          </Link>
        </div>
      </div>
      {components[activeButton]}
   
    </nav>
    
  );
};

export default NavBar;
