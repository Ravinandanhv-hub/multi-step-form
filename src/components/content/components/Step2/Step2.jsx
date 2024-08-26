import React, { useContext } from 'react'
import { stepCountDispatchContext } from '../../../../Reducers/StepCount'
import { useDispatch } from 'react-redux';

export default function Step2() {
    // use context API
    // const stepCountDispatch = useContext(stepCountDispatchContext)
    const dispatch = useDispatch()

    function onBack() {
        dispatch({type: 'previous'});
    }

    function onSubmit() {
        dispatch({type: 'next'});
    }

    return (
    <>
        <div>Step2</div>
        <span className='go-back' onClick={() => onBack()}>Go Back</span>
        <button className='ui-btn-primary' type='submit' onClick={() => onSubmit()}>Next Step</button>
    </>
    )
}
