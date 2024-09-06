import { useState } from 'react'

import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={styles.container}>
        <div classname="App"></div>
        <div style={styles.leftPane}>
          <h1>Activité (composant)</h1>
          <br></br>
          <br></br>
          <FirstComponent/>
          <br></br>
          <br></br>
          <SecondComponent />
        </div>
        <div style={styles.rightPane}>
          <ThirdComponent />
        </div>
      </div>
    </>
  )
}


const styles = {
  container: {
    display: 'flex',    // Flexbox para criar layout dividido
    height: '100vh',    // Altura total da viewport
    margin: 0,          // Remove a margem padrão
    padding:  0,         // Remove o padding padrão
  },
  leftPane: {
    flex: 1,            // Ocupa 50% da largura
    backgroundColor: '',  // Cor de fundo da esquerda
    padding: '20px',    // Espaçamento interno
    borderRight: '2px solid #ddd',  // Borda direita
    boxSizing: 'border-box',  // Inclui o padding e a borda na largura
  },
  rightPane: {
    flex: 1,            // Ocupa 50% da largura
    backgroundColor: '',  // Cor de fundo da direita
    padding: '20px',    // Espaçamento interno
    boxSizing: 'border-box',  // Inclui o padding e a borda na largura
  },
  h1: {
    textalign: 'center',
    margin: '2px',
    paddingtop: '20%',
  }

};


export default App  