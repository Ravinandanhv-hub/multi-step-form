import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Step4.css'

export default function Step4() {

  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);

  function onBack() {
    dispatch({type: 'previous'});
  }

  return (
      confirm ? (
        <div className='thanks-wrapper'>
          <img src='src/assets/images/icon-thank-you.svg'/>
          <p style={{ fontWeight: 'bold' }}>Thank you!</p>
          <small style={{color: 'var(--cool-gray)'}}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</small>
        </div>
      ) : (
        <>
          <div>
            <h1 style={{marginBottom: '5px'}}>Finishing up</h1>
            <small style={{color: 'var(--cool-gray)'}}>Double-check if everything looks OK before confirming.</small>
          </div>
          <div>
            <div>
              <div>
    
              </div>
              <div>
                
              </div>
            </div>
            <div>
    
            </div>
          </div>
          <div className='footer'>
            <span className='go-back' onClick={() => onBack()}>Go Back</span>
            <button className='ui-btn-primary' type='submit' onClick={() => setConfirm(true)}>Confirm</button>
          </div>
        </>
      )
  )
}
