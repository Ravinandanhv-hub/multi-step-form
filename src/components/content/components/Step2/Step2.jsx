import React, { useContext, useState } from 'react';
// import { stepCountDispatchContext } from '../../../../Reducers/StepCount'
import { useDispatch, useSelector } from 'react-redux';
import './Step2.css';
import Switch from '@mui/material/Switch';

export default function Step2() {
    // use context API
    // const stepCountDispatch = useContext(stepCountDispatchContext)
    const dispatch = useDispatch();
    // const [tenure, setTenure] = useState('monthly');
    const plan = useSelector((state) => state.formData.plan);
    const [errMsg, updateErrMsg] = useState(false);

    function onBack() {
        dispatch({type: 'previous'});
    }

    function onSubmit() {
        if(plan.type) {
            dispatch({type: 'next'});
        } else {
            updateErrMsg(true);
        }
    }

    const updatePlan = (type, price) => {
        dispatch({type: 'UPDATEPLAN', data: { type: type, tenure: plan.tenure, price: price}});
        updateErrMsg(false);
    }

    function updateTenure() {
        const tenure = plan.tenure == 'yearly' ? 'monthly' : 'yearly'
        const price = plan.price ? tenure == 'yearly' ? plan.price * 10 : plan.price / 10 : 0;
        dispatch({type: 'UPDATEPLAN', data: { type: plan.type, tenure: tenure, price: price}});
    }

    return (
        <>
            <div>
                <h1 style={{marginBottom: '5px'}}>Select your plan</h1>
                <small style={{color: 'var(--cool-gray)'}}>You have the option of monthly or yearly billing.</small>
            </div>
            <div className='plan-parent'>
                <div className='plan' onClick={() => updatePlan('arcade', plan.tenure == 'monthly' ? 9 : 90 )} style={plan.type === 'arcade' ? {background: 'rgb(227 240 251)'} : {}}>
                    <img src='src/assets/images/icon-arcade.svg' />
                    <div style={{marginTop: "30%"}}>
                        <div className='plan-name'>Arcade</div>
                        <div className='plan-rate'>{ plan.tenure == 'monthly' ? '$9/mo' : '$90/yr'}</div>
                    </div>
                </div>
                <div className='plan' onClick={() => updatePlan('advanced', plan.tenure == 'monthly' ? 12 : 120)} style={plan.type === 'advanced' ? {background: 'rgb(227 240 251)'} : {}}>
                    <img src='src/assets/images/icon-advanced.svg' />
                    <div style={{marginTop: "30%"}}>
                        <div className='plan-name'>Advanced</div>
                        <div className='plan-rate'>{ plan.tenure == 'monthly' ? '$12/mo' : '$120/yr' }</div>
                    </div>
                </div>
                <div className='plan' onClick={() => updatePlan('pro', plan.tenure == 'monthly' ? 15 : 150)} style={plan.type === 'pro' ? {background: 'rgb(227 240 251)'} : {}}>
                    <img src='src/assets/images/icon-pro.svg' />
                    <div style={{marginTop: "30%"}}>
                        <div className='plan-name'>Pro</div>
                        <div className='plan-rate'>{ plan.tenure == 'monthly' ? '$15/mo' : '$150/yr' }</div>
                    </div>
                </div>
            </div>
            <div className='tenure-toggle'>
                <div>Monthly</div>
                <Switch checked={plan.tenure == 'yearly'} onChange={() => updateTenure()} />
                <div>Yearly</div>
            </div>
            <div style={errMsg ? {marginTop: '11.5%'} : {marginTop: '15%'}}>
                { errMsg ? <div style={{color: 'var(--strawberry-red)'}}><small>please select the Plan</small></div> : <div></div>}
                <div className='footer' style={{marginTop: '0'}}>
                    <span className='go-back' onClick={() => onBack()}>Go Back</span>
                    <button className="ui-btn-primary" type='submit' onClick={() => onSubmit()}>Next Step</button>
                </div>
            </div>
        </>
    )
}
