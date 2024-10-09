//PARCIAL 
//WILLIAM XAVIER REGO - 2314290133

import React, { useState } from 'react';

const Forms = () => {
  const [altura, setAltura] = useState('');
  const [massa, setMassa] = useState('');
  const [imc, setImc] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const alturaEmMetros = parseFloat(altura.replace(',', '.'));
    const massaEmKg = parseFloat(massa.replace(',', '.'));
    if (alturaEmMetros && massaEmKg) {
      const imcCalculado = massaEmKg / (alturaEmMetros * alturaEmMetros);
      setImc(imcCalculado.toFixed(2));
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
          </div>
        )}
      </div>
    </>
  )
}

export default Forms;
