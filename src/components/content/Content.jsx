import React, { useContext } from 'react';
import './Content.css';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';
import { stepCountContext } from '../../Reducers/StepCount';
import { useSelector } from 'react-redux';

export default function Content() {
  // context API
  // const stepCount = useContext(stepCountContext);
  const stepCount = useSelector(state => state.stepCount);

  const renderLogic = () => {
    switch(stepCount){
      case 0:
          return <Step1/>;
      case 1:
          return <Step2/>;
      case 2:
          return <Step3/>;
      case 3:
          return <Step4/>;
    }
  } 

  return (
    <div className='content-warpper'>
      {renderLogic()}
    </div>
  )
}
