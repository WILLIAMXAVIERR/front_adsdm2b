import React from 'react'

const FirstComponent = () => {
  const nome = "William";
  const sobrenome = "Xavier";
  const Matricula = 2314290133;
  const Professor = "Felipe"
  const Diciplina = "Construção de Frontend"
    return (
    <div>
        <h1> Demande </h1>
        <p> Salut! Mon nom est {nome} {sobrenome} et ma <main></main> inscription c'est {Matricula}. 
        J'étudie {Diciplina} avec le professeur {Professor}.    
        </p>
    </div>
  )
}

export default FirstComponent