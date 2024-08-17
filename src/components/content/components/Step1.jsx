import React from 'react'

export default function Step1() {
  return (
    <>
        <h1 style={{marginBottom: '5px'}}>Personal Info</h1>
        <small style={{color: 'var(--cool-gray)'}}>Please provide your name, email adddress, and phone number</small>
        <div style={{marginTop: '10px'}}>
            <form className='form'>
                <div>
                    <label>Name</label>
                    <input></input>
                </div>
                <div>
                    <label>Email Address</label>
                    <input></input>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input></input>
                </div>
                <button className='ui-btn-primary'>Next Step</button>
            </form>
        </div>
    </>
  )
}
