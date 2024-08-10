import { useState } from 'react'
import './App.css'
import Step  from './components/Step'
// import sidebarImg from './assets/images/bg-sidebar-desktop.svg'

function App() {
  const [stepCount, setStepCount] = useState(0);
  const steps = ['YOUR INFO', 'SELECT PLAN', 'ADDS-ONS', 'SUMMARY']

  return (
    <div className='warpper'>
      <div className='steper'>
        {
          steps.map((e, index)=>
            <Step key={index} index={index} stepCount={stepCount} stepName={steps[index]}/>
          )
        }
      </div>
      <div className='content'></div>
    </div>
  )
}

export default App
