import React, { useState } from 'react';

//WILLIAM XAVIER REGO - 2314290133

const Forms = () => {
  const [altura, setAltura] = useState('');
  const [massa, setMassa] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const alturaEmMetros = parseFloat(altura.replace(',', '.'));
    const massaEmKg = parseFloat(massa.replace(',', '.'));
    if (alturaEmMetros && massaEmKg) {
      const imcCalculado = massaEmKg / (alturaEmMetros * alturaEmMetros);
      setImc(imcCalculado.toFixed(2));
      if (imcCalculado < 18.5) {
        setClassificacao('Magreza');
      } else if (imcCalculado < 24.9) {
        setClassificacao('Normal');
      } else if (imcCalculado < 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imcCalculado < 39.9) {
        setClassificacao('Obesidade');
      } else {
        setClassificacao('Obesidade Grave');
      }
    }
  }

  return (
    <>
      <div>
        <h1>IMC</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="altura">Altura: </label>
            <input 
              type="text" 
              id='altura' 
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder='Digite a sua altura' 
            />
          </div>
          <div>
            <label htmlFor="massa">Massa: </label>
            <input 
              type="text" 
              id='massa' 
              value={massa}
              onChange={(e) => setMassa(e.target.value)}
              placeholder='Digite o seu peso' 
            />
          </div>
          <div>
            <input 
              type="submit"  
              value='Enter' 
            />
          </div>
        </form>
        {imc && (
          <div>
            <h2>Seu IMC é: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
          </div>
        )}
      </div>
    </>
  )
}

export default Forms;