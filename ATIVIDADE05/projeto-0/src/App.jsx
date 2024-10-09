import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'
import FocusBlurExample from './components/FocusBlurExample'
import EventExamples from './components/EventExemples'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <FocusBlurExample/> //Chamando componente FocusBlurExample
      <Events/> //Chamando componente Events   
      <EventExamples/> //Chamando componente EventExamples
=======
      //Chamando componente Events
      <Events/> 
      //Chamando componente FocusBlurExample 
      <FocusBlurExample/>   
      //Chamando componente EventExamples
      <EventExamples/> 
>>>>>>> 68d42f31859ddc8f266b60569e0b92bedb7bf903
    </>
  )
}

export default App
