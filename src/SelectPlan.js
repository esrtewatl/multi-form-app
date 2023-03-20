import React, { useState, useEffect } from 'react';
import './App.css';
import AddOns from './AddOns';
import Summary from './Summary';
import {useNavigate} from 'react-router-dom';


const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(localStorage.getItem('selectedPlan') || 'plan1');
  const [isYearly, setIsYearly] = useState(false);
  const [onlineServiceChecked, setOnlineServiceChecked] = useState(false);
const [largerStorageChecked, setLargerStorageChecked] = useState(false);
const [customizableProfileChecked, setCustomizableProfileChecked] = useState(false);
const [addPrice, setAddPrice] = useState(0);
const [showAddOns, setShowAddOns] = useState(false);
const [showSelectPlan, setShowSelectPlan] = useState(true); 
const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('selectedPlan', selectedPlan);
  }, [selectedPlan]);

  const PLAN_INFO = {
    plan1: {
      name: 'Arcade',
      yearlyPrice1: 90,
      monthlyPrice1: 9,
      freeMonths: 2,
    },
    plan2: {
      name: 'Advanced',
      yearlyPrice2: 120,
      monthlyPrice2: 12,
      freeMonths: 2,
    },
    plan3: {
      name: 'Pro',
      yearlyPrice3: 150,
      monthlyPrice3: 15,
      freeMonths: 0,
    },
  };

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const selectedPlanData = PLAN_INFO[selectedPlan];
  const { name, yearlyPrice1, monthlyPrice1, yearlyPrice2, monthlyPrice2, yearlyPrice3, monthlyPrice3, freeMonths } = selectedPlanData;
  const selectedPlanPrice = isYearly ? (selectedPlanData[`yearlyPrice${selectedPlan.slice(-1)}`]) : (selectedPlanData[`monthlyPrice${selectedPlan.slice(-1)}`]);
  const selectedPlanFreeMonths = freeMonths && isYearly ? `(${freeMonths} months free)` : '';
  <Summary
  plan={selectedPlanData}
  onlineServiceChecked={onlineServiceChecked}
  largerStorageChecked={largerStorageChecked}
  customizableProfileChecked={customizableProfileChecked}
  addPrice={addPrice}
/>
const handleNextClick = () => {
  setShowSelectPlan(false);
  setShowAddOns(true);
};


return (
  <div className='form-container' id='form-container'>
    {showSelectPlan && (
      <>
        <h2>Select your plan</h2>
        <p className='option'>You have the option of monthly or yearly billing.</p>
        <div className='plans-container'>
          <div
            className={`plan1 ${selectedPlan === 'plan1' ? 'selected' : ''}`}
            onClick={() => handlePlanClick('plan1')}
          >
            <img src='/sp1.png' alt='Arcade' className='planLogo' />
            <h3 className='planName'>Arcade</h3>
            {isYearly ? <p className='yearlyPrice'>${yearlyPrice1}/yr</p> : <p className='monthlyPrice'>${monthlyPrice1}/mo</p>}
            <p className={isYearly ? '' : 'hidden'}>{selectedPlanFreeMonths}</p>
          </div>
          <div
            className={`plan2 ${selectedPlan === 'plan2' ? 'selected' : ''}`}
            onClick={() => handlePlanClick('plan2')}
          >
            <img src='/sp2.png' alt='Advanced' className='planLogo' />
            <h3 className='planName'>Advanced</h3>
            {isYearly ? <p className='yearlyPrice'>${yearlyPrice2}/yr</p> : <p className='monthlyPrice'>${monthlyPrice2}/mo</p>}
            <p className={isYearly ? '' : 'hidden'}>{selectedPlanFreeMonths}</p>
          </div>
          <div
            className={`plan3 ${selectedPlan === 'plan3' ? 'selected' : ''}`}
            onClick={() => handlePlanClick('plan3')}
          >
            <img src='/sp3.png' alt='Pro' className='planLogo' />
            <h3 className='planName'>Pro</h3>
            {isYearly ? <p className='yearlyPrice'>${yearlyPrice3}/yr</p> : <p className='monthlyPrice'>${monthlyPrice3}/mo</p>}
            <p className={isYearly ? '' : 'hidden'}>{selectedPlanFreeMonths}</p>
          </div>
        </div>

        <div className='switch'>
          Monthly{' '}
          <label className='switch-knob'>
            <input type='checkbox' onChange={handleToggle} checked={isYearly} />
            <span className='slider-round'></span>
          </label>
          Yearly
        </div>
        <div>
          <button className='button' onClick={handleNextClick}>
            Next
          </button>
        </div>
      </>
    )}

    {showAddOns && <AddOns />}
    <div className='goBackDiv'>
    <button className='goBack'onClick ={() =>  navigate(-1)}>Go Back</button></div>
  </div>
);
};

export default SelectPlan;