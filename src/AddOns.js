import React from 'react';
import './App.css';

const ADD_ON_DATA = {
  onlineService: 'Online service',
  onlineServicePrice: 1,
  largerStorage: 'Larger Storage',
  largerStoragePrice: 2,
  custProfile: 'Customizable profile',
  customPrice: 2,
};

const AddOns = () => {
  const [checkedState, setCheckedState] = React.useState({
    onlineServiceChecked: localStorage.getItem('onlineServiceChecked') === 'true',
    largerStorageChecked: localStorage.getItem('largerStorageChecked') === 'true',
    customizableProfileChecked: localStorage.getItem('customizableProfileChecked') === 'true',
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    localStorage.setItem(name, checked);
  };

  return (
    <div>
      <div className='addOns-container' id='form-container'>
        <h2>Pick add-ons</h2>
        <p className='text'>Add-ons help enhance your gaming experience.</p>

        <div className='addOns'>
          <div
            className='addOn-div'
            style={{ backgroundColor: checkedState.onlineServiceChecked ? 'lightblue' : 'white' }}
          >
            <input
              type='checkbox'
              name='onlineServiceChecked'
              className='checkbox'
              checked={checkedState.onlineServiceChecked}
              onChange={handleCheckboxChange}
            />
            <div className='addonContent'>
              <h3 className='addOn1'>{ADD_ON_DATA.onlineService}</h3>
              <p className='divP'>Access to multiplayer games</p>
            </div>
            <p className='price'> ${ADD_ON_DATA.onlineServicePrice}/mo</p>
          </div>

          <div
            className='addOn-div'
            style={{ backgroundColor: checkedState.largerStorageChecked ? 'lightblue' : 'white' }}
          >
            <input
              type='checkbox'
              name='largerStorageChecked'
              className='checkbox'
              checked={checkedState.largerStorageChecked}
              onChange={handleCheckboxChange}
            />
            <div className='addonContent'>
              <h3 className='addOn2'>{ADD_ON_DATA.largerStorage}</h3>
              <p className='divP'>Extra 1TB of cloud space</p>
            </div>
            <p className='price'>${ADD_ON_DATA.largerStoragePrice}/mo</p>
          </div>

          <div
            className='addOn-div'
            style={{ backgroundColor: checkedState.customizableProfileChecked ? 'lightblue' : 'white' }}
          >
            <input
              type='checkbox'
              name='customizableProfileChecked'
              className='checkbox'
              checked={checkedState.customizableProfileChecked}
              onChange={handleCheckboxChange}
            />
            <div className='addonContent'>
              <h3 className='addOn3'>{ADD_ON_DATA.custProfile}</h3>
              <p className='divP'>Custom theme on your profile</p>
            </div>
            <p className='price'>${ADD_ON_DATA.customPrice}/mo</p>
          </div>
        </div>
      </div>

      <div>
        <button className='button-add'>Next</button>
      </div>
    </div>
  );
};

export default AddOns;
