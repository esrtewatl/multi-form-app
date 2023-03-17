import React from 'react';
import './App.css';


function Summary(props) {
  const { plan, onlineServiceChecked, largerStorageChecked, customizableProfileChecked, addPrice, onClick } = props;

  const getTotalPrice = () => {
    let totalPrice = plan?.price || 0;

    if (onlineServiceChecked) {
      totalPrice += 1;
    }

    if (largerStorageChecked) {
      totalPrice += 2;
    }

    if (customizableProfileChecked) {
      totalPrice += 2;
    }

    return totalPrice;
  };

  return (
    <div className='summaryContainer' id='form-container'>
      <h2>Finishing Up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className='checkout-container'>
        <div className='sectionOnePlan-Price'>
          <div className='selectedPlan'>
            <h4>
              {plan?.name}
              {plan?.planLength}
            </h4>
            <br />
            <div className="change-div" onClick={onClick}>
              <p className='changePlan'>Change</p>
            </div>
          </div>
          <div className='planPrice'>${plan?.price}</div>
        </div>

        <div className='sectionTwoAddOns'>
          {onlineServiceChecked && (
            <>
              <div className='selectedAddOns'>
                <p>{'Online services'}</p>
                <br />
              </div>

              <div className='addOnPrice'>
                <p className='addonp'>+${1}/mo</p>
                <br />
                <p>{addPrice}</p>
              </div>
            </>
          )}
          {largerStorageChecked && (
            <>
              <div className='selectedAddOns'>
                <p>{'Larger storage'}</p>
                <br />
              </div>

              <div className='addOnPrice'>
                <p className='addonp'>+${2}/mo</p>
                <br />
                <p>{addPrice}</p>
              </div>
            </>
          )}
          {customizableProfileChecked && (
            <>
              <div className='selectedAddOns'>
                <p>{'Customizable profile'}</p>
                <br />
              </div>

              <div className='addOnPrice'>
                <p className='addonp'>+${2}/mo</p>
                <br />
                <p>{addPrice}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className='totalDiv'>
        Total (per month)
        <div className='totalPrice-div'>
          <p className='totalPrice'>+${getTotalPrice()}</p>
        </div>
      </div>
      <div>
        <button className='button'>CONFIRM</button>
      </div>
    </div>
  );
}

export default Summary;
