import { useState, useReducer } from 'react'
import './App.css'
import Step  from './components/Step'
import Content from './components/content/Content'
import stepCountReducer from './Reducers/StepCount'
import {stepCountContext, stepCountDispatchContext} from './Reducers/StepCount'
// import sidebarImg from './assets/images/bg-sidebar-desktop.svg'

function App() {
  // const [stepCount, setStepCount] = useState(0);
  const [stepCount, dispatch] = useReducer(stepCountReducer, 0)
  const steps = ['YOUR INFO', 'SELECT PLAN', 'ADDS-ONS', 'SUMMARY']

  return (
    <stepCountContext.Provider value={stepCount}>
      <stepCountDispatchContext.Provider value={dispatch}>
        <div className='warpper'>
          <div className='steper'>
            {
              steps.map((e, index)=>
                <Step key={index} index={index} stepCount={stepCount} stepName={steps[index]}/>
              )
            }
          </div>
          <div className='content'>
            <Content stepCount={stepCount}/>
          </div>
        </div>
      </stepCountDispatchContext.Provider>
    </stepCountContext.Provider>
  )
}

export default App
