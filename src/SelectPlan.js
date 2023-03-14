import React from 'react';
import './App.css';



const SelectPlan = ({ selectedPlan, isYearly, onPlanClick, onToggle, plan1Name, yearlyp1Price, monthlyp1Price, plan2Name, yearlyp2Price, monthlyp2Price, plan3Name, yearlyp3Price, monthlyp3Price, free }) => {
  return (
    <div className='form-container' id='form-container'>
      <h2>Select your plan</h2>
      <p className='option'>You have the option of monthly or yearly billing.</p>
      <div className='plans-container'>
        <div
          className={`plan1 ${selectedPlan === 'plan1' ? 'selected' : ''}`}
          onClick={() => onPlanClick('plan1')}
        >
          <img src='/sp1.png' alt='Arcade' className='planLogo' />
          <h3 className='planName'>{plan1Name}</h3>
          {isYearly ? <p className='yearlyPrice'>${yearlyp1Price}/yr</p> : <p className='monthlyPrice'>${monthlyp1Price}/mo</p>}
          <p className={isYearly ? 'yearly' : 'hidden'}>{free}</p>
        </div>
        <div
          className={`plan2 ${selectedPlan === 'plan2' ? 'selected' : ''}`}
          onClick={() => onPlanClick('plan2')}
        >
          <img src='/sp2.png' alt='Advanced' className='planLogo' />
          <h3 className='planName'>{plan2Name}</h3>
          {isYearly ? <p className='yearlyPrice'>${yearlyp2Price}/yr</p> : <p className='monthlyPrice'>${monthlyp2Price}/mo</p>}
          <p className={isYearly ? 'yearly' : 'hidden'}>{free}</p>
        </div>
        <div
          className={`plan3 ${selectedPlan === 'plan3' ? 'selected' : ''}`}
          onClick={() => onPlanClick('plan3')}
        >
          <img src='/sp3.png' alt='Pro' className='planLogo' />
          <h3 className='planName'>{plan3Name}</h3>
          {isYearly ? <p className='yearlyPrice'>${yearlyp3Price}/yr</p> : <p className='monthlyPrice'>${monthlyp3Price}/mo</p>}
          <p className={isYearly ? 'yearly' : 'hidden'}>{free}</p>
        </div>
      </div>
      <div className='switch'>
        Monthly{' '}
        <label className='switch-knob'>
          <input type='checkbox' onChange={onToggle} checked={isYearly} />
          <span className='slider-round'></span>
        </label>
        Yearly
      </div>
      <button className='button'>Next</button>
    </div>
  );
};

export default SelectPlan;
