import React, { useContext, useState } from 'react'
// import { stepCountDispatchContext } from '../../../../Reducers/StepCount'
import { useDispatch } from 'react-redux';
import './Step2.css'

export default function Step2() {
    // use context API
    // const stepCountDispatch = useContext(stepCountDispatchContext)
    const dispatch = useDispatch();
    const [selectedPlan, setSelectedPlan] = useState('');

    function onBack() {
        dispatch({type: 'previous'});
    }

    function onSubmit() {
        dispatch({type: 'next'});
    }

    return (
    <>
        <div>
            <h1 style={{marginBottom: '5px'}}>Select your plan</h1>
            <small style={{color: 'var(--cool-gray)'}}>You have the option of monthly or yearly billing.</small>
        </div>
        <div className='plan-parent'>
            <div className='plan' onClick={() => setSelectedPlan('arcade')} style={selectedPlan === 'arcade' ? {background: 'rgb(227 240 251)'} : {}}>
                <img src='src/assets/images/icon-arcade.svg' />
                <div style={{marginTop: "30%"}}>
                    <div className='plan-name'>Arcade</div>
                    <div className='plan-rate'>$9/mo</div>
                </div>
            </div>
            <div className='plan' onClick={() => setSelectedPlan('advanced')} style={selectedPlan === 'advanced' ? {background: 'rgb(227 240 251)'} : {}}>
                <img src='src/assets/images/icon-advanced.svg' />
                <div style={{marginTop: "30%"}}>
                    <div className='plan-name'>Advanced</div>
                    <div className='plan-rate'>$12/mo</div>
                </div>
            </div>
            <div className='plan' onClick={() => setSelectedPlan('pro')} style={selectedPlan === 'pro' ? {background: 'rgb(227 240 251)'} : {}}>
                <img src='src/assets/images/icon-pro.svg' />
                <div style={{marginTop: "30%"}}>
                    <div className='plan-name'>Pro</div>
                    <div className='plan-rate'>$15/mo</div>
                </div>
            </div>
        </div>
        <div>
            <span className='go-back' onClick={() => onBack()}>Go Back</span>
            <button className='ui-btn-primary' type='submit' onClick={() => onSubmit()}>Next Step</button>
        </div>
    </>
    )
}
