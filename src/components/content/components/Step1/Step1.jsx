import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import { stepCountDispatchContext } from '../../../../Reducers/StepCount';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Step1.module.css'

export default function Step1() {
    const  {register, handleSubmit, formState: { errors }, reset} = useForm();
    // const dispatch = useContext(stepCountDispatchContext);
    const data = useSelector((state) => state.formData.info);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch({type: 'next'});
        dispatch({type: 'UPDATEINFO', data: data});
    }

    useEffect(() => {
        reset(data)
    }, [])

    return (
    <>
        <h1 style={{marginBottom: '5px'}}>Personal Info</h1>
        <small style={{color: 'var(--cool-gray)'}}>Please provide your name, email adddress, and phone number.</small>
        <div style={{marginTop: '10px'}}>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control'>
                    <label>Name</label>
                    <input style={errors?.name ? {borderColor : 'var(--strawberry-red) !important'} : {}} placeholder='e.g. Ram' {...register('name', {required: 'Name is required'})}></input>
                </div>
                <div className='form-control'>
                    <label>Email Address</label>
                    <input style={errors?.name ? {borderColor : 'var(--strawberry-red) !important'} : {}} placeholder='e.g. ram@gamil.com' {...register('email', {required: 'Email is required', pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/})}></input>
                </div>
                <div className='form-control'>
                    <label>Phone Number</label>
                    <input style={errors?.name ? {borderColor : 'var(--strawberry-red) !important'} : {}} placeholder='e.g. 22222 22222' {...register('phone', {required: 'Phone Number Required', pattern: /^[()+-.s0-9][^\r\na-zA-Z]{0,49}$/ })}></input>
                </div>
                <button className={`ui-btn-primary ${classes.nextBtn}`} type='submit'>Next Step</button>
            </form>
        </div>
    </>
    )
}
