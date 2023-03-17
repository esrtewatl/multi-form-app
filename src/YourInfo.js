import React, { useState } from 'react';
import SelectPlan from './SelectPlan';

export default function YourInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [showSelectPlan, setShowSelectPlan] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    fetch('/verifyEmail', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
      .then(response => response.json())
      .then(data => {
        const isEmailAvailable = data.isAvailable;
        setIsEmailAvailable(isEmailAvailable);
      })
      .catch(error => console.error(error));
  };

  const handleTelChange = (event) => {
    const tel = event.target.value;
    setTel(tel);
  };

  const handleNextClick = () => {
    setShowSelectPlan(true);
    setActiveButton(activeButton + 1);
  };

  return (
    <div className='form-container' id="form-container">
      {!showSelectPlan && (
        <>
          <div></div>
          <h2>Personal Info</h2>
          <p>Please provide your name, email address, and phone number.</p>
          <form className='form'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={name} onChange={handleNameChange}  placeholder='e.g. Stephen King' required />

            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' value={email} onChange={handleEmailChange} placeholder='e.g. stephenking@lorem.com' required/>
            {!isEmailAvailable && <span className='error-message'>Email is already in use</span>}

            <label htmlFor='phone'>Phone Number</label>
            <input type='tel' id='phone' value={tel} onChange={handleTelChange} placeholder='e.g. +1 234 567 890' pattern="[0-9]*" required />
          </form>
          <div>
            <button className='button' onClick={handleNextClick}>Next</button>
          </div>
        </>
      )}
      {showSelectPlan && (
        <>
          <SelectPlan />
        
        </>
      )}
    </div>
  );
}
