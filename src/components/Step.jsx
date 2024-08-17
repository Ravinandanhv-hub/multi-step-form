import React from 'react'
import './Step.css'
import '../assets/styles/button.scss'

function Step(props) {
  return (
    <div className='step'>
        <div className={props.index === props.stepCount ? 'bubble selected' : 'bubble'}>{props.index + 1}</div>
        <div><div style={{fontSize: 'small'}}>STEP {props.index + 1}</div><div>{props.stepName}</div></div>
    </div>
  )
}

export default Step;
