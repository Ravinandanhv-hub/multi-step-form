import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Step4.css'

export default function Step4() {

  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);
  const formData = useSelector(state => state.formData);
  const [total, updateTotal] = useState(0);

  const onBack = () => {
    dispatch({type: 'previous'});
  }

  const getTotal = () => {
    let total = 0;
    const priceTags = document.querySelectorAll('#price');
    priceTags.forEach((tag) => {
      const num = tag.innerText.match(/\d+/)[0];
      total = total + Number(num);
    })
    updateTotal(total);
  }

  const handleChange = () => {
    dispatch({ type: 'byValue', data: 1 })
  }

  useEffect(()=>{
    getTotal();
  }, []);

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
          <div className='summary-container'>
            <div style={{ backgroundColor: 'var(--magnolia)', padding: '5%', borderRadius: '8px' }}>
              <div className='summary'>
                  <div>
                    <div style={{fontWeight: '500'}}>
                      { formData.plan.type } ({ formData.plan.tenure })
                    </div>
                    <div>
                      <small style={{color: 'var(--cool-gray)', textDecoration: 'underline', cursor: 'pointer'}} onClick={handleChange}>Change</small>
                    </div>
                  </div>
                  <div style={{fontWeight: '500'}} id='price'>
                      ${ formData.plan.price }/{ formData.plan.tenure == 'monthly' ? 'mo' : 'yr' }
                  </div>
              </div>
              {Object.keys(formData.addons).map((e, index) => formData.addons[e] &&
                (
                  <div className='oddOns-style' key={e}>
                      <div style={{color: 'var(--cool-gray)'}}>
                          <small>{e}</small>
                      </div>
                      <div id='price'>
                        {
                          index == 0 ? formData.plan.tenure == 'monthly' ? '+$1/mo' : '+$10/yr' : formData.plan.tenure == 'monthly' ? '+$2/mo' : '+$20/yr'
                        }
                      </div>
                  </div>
                )
              )}
            </div>
            <div className='oddOns-style' style={{padding: '5%', margin: '0'}}>
              <div style={{color: 'var(--cool-gray)'}}>
                  <small>Total (per { formData.plan.tenure == 'monthly' ? 'month': 'year' })</small>
              </div>
              <div style={{fontWeight: '500', color: 'var(--purplish-blue)'}}>
                  +${ total }/{formData.plan.tenure == 'monthly' ? 'mo' : 'yr'}
              </div>
            </div>
          </div>
          <div className='footer' style={{marginTop: '3%'}}>
            <span className='go-back' onClick={onBack}>Go Back</span>
            <button className='ui-btn-primary' type='submit' onClick={() => setConfirm(true)}>Confirm</button>
          </div>
        </>
      )
  )
}
