import React from 'react'

function Step(props) {
  console.log(props);
  return (
    <div className='step'>
        <div></div>
        <div style={{display: 'grid'}}><span>STEP {props.index + 1}</span><span>{props.stepName}</span></div>
    </div>
  )
}

export default Step;
