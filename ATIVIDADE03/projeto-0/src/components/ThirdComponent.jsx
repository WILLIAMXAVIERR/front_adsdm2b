import React from 'react'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

const ThirdComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h1>C'est le troisièm composant</h1>
        
        <FirstComponent/>
        <br></br>
        
        <SecondComponent/>
    </div>
  )
}

export default ThirdComponent