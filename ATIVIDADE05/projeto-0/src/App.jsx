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
      <Events/> //Chamando componente Events
      <FocusBlurExample/> //Chamando componente FocusBlurExample   
      <EventExamples/> //Chamando componente EventExamples
    </>
  )
}

export default App
