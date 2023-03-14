import React, { useState } from 'react';
// import './NavBar.css';
// import YourInfo from './YourInfo';
// import SelectPlan from './SelectPlan';
// import AddOns from './AddOns';
// import Summary from './Summary';

const NavBar = () => {
const [activeButton, setActiveButton] = useState(1);

const handleButtonClick = (buttonNumber) => {
setActiveButton(buttonNumber);
};

// let componentToRender;
// switch (activeButton) {
// case 1:
// componentToRender = <YourInfo />;
// break;
// case 2:
// componentToRender = <SelectPlan />;
// break;
// case 3:
// componentToRender = <AddOns />;
// break;
// case 4:
// componentToRender = <Summary />;
// break;
// default:
// componentToRender = <YourInfo />;
// }

return (
  <nav className="aside">
    {/* component code */}
    <div className="circle-buttons-container">
      <div className="button-wrapper">
        <button
          className={`circle-button ${activeButton === 1 ? 'active' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          1
        </button>
        <span className="button-text">
          <span className="lil_guy">Step 1</span>
          <br />
          YOUR INFO
        </span>
      </div>
      <div className="button-wrapper">
        <button
          className={`circle-button ${activeButton === 2 ? 'active' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          2
        </button>
        <span className="button-text">
          <span className="lil_guy">Step 2</span>
          <br />
          SELECT PLAN
        </span>
      </div>
      <div className="button-wrapper">
        <button
          className={`circle-button ${activeButton === 3 ? 'active' : ''}`}
          onClick={() => handleButtonClick(3)}
        >
          3
        </button>
        <span className="button-text">
          <span className="lil_guy">Step 3</span>
          <br />
          ADD-ONS
        </span>
      </div>
      <div className="button-wrapper">
        <button
          className={`circle-button ${activeButton === 4 ? 'active' : ''}`}
          onClick={() => handleButtonClick(4)}
        >
          4
        </button>
        <span className="button-text">
          <span className="lil_guy">Step 4</span>
          <br />
          SUMMARY
        </span>
      </div>
    </div>
    {/* {componentToRender} */}
  </nav>
);
}
export default NavBar;