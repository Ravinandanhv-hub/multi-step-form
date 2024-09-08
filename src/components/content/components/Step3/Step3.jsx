import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Step3.css'

export default function Step3() {

  const state = useSelector((state) => state.formData);

  const dispatch = useDispatch();

  function onBack() {
    dispatch({type: 'previous'});
  }

  function onSubmit() {
      dispatch({type: 'next'});
  }

  const handleChange = (update) => {
      dispatch({type: 'UPDATEADDON', data: { ...state.addons, ...update }})
  }

  return (
    <>
      <div>
        <h1 style={{marginBottom: '5px'}}>Pick add-ons</h1>
        <small style={{color: 'var(--cool-gray)'}}>Add-ons help enhance your gaming experience.</small>
      </div>
      <div className='addon-wrapper'>
        <label className='addon' htmlFor='online-service' style={state.addons.onlineService ? { border: '1px solid var(--purplish-blue)'} : {} }>
          <input type='checkbox' checked={state.addons.onlineService} onChange={() => handleChange({ onlineService: !state.addons.onlineService})} id='online-service'/>
            <div className='addon-details'>
              <div>
                <div className='addon-label'>Online service</div>
                <div className='addon-des'>Access to multiplier games</div>
              </div>
              <div className='addon-price'>{ state.plan.tenure == 'monthly' ? '+$1/mo' : '+10/yearly' }</div>
            </div>
        </label>
        <label className='addon' htmlFor='large-storage' style={state.addons.largerStorage ? { border: '1px solid var(--purplish-blue)'} : {} }>
          <input type='checkbox' checked={state.addons.largerStorage} onChange={() => handleChange({ largerStorage: !state.addons.largerStorage})} id='large-storage'/>
            <div className='addon-details'>
              <div >
                <div className='addon-label'>Larger Storage</div>
                <div className='addon-des'>Extra 1TB of cloud save</div>
              </div>
              <div className='addon-price'>{ state.plan.tenure == 'monthly' ? '+$2/mo' : '+20/yearly' }</div>
            </div>
        </label>
        <label className='addon' htmlFor='customizable-profile' style={state.addons.customizableProfile ? { border: '1px solid var(--purplish-blue)'} : {} }>
          <input type='checkbox' checked={state.addons.customizableProfile} onChange={() => handleChange({ customizableProfile: !state.addons.customizableProfile})} id='customizable-profile'/>
            <div className='addon-details'>
              <div >
                <div className='addon-label'>Customizable profile</div>
                <div className='addon-des'>Custom theme on your profile</div>
              </div>
              <div className='addon-price'>{ state.plan.tenure == 'monthly' ? '+$2/mo' : '+20/yearly' }</div>
            </div>
        </label>
      </div>
      <div className='footer' style={{marginTop: '19.5%'}}>
        <span className='go-back' onClick={() => onBack()}>Go Back</span>
        <button className='ui-btn-primary' type='submit' onClick={() => onSubmit()}>Next Step</button>
      </div>
    </>
  )
}
