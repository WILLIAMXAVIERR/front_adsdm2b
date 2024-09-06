import React from 'react'

const SecondComponent = () => {
    const Voiture = [
        {nome: 'Gol', cor: 'Blanc', velocidade: '200 km/h'},
        {nome: 'Jetta', cor: 'Noir', velocidade: '190 km/h'},
        {nome: 'Tempra', cor: 'Bleu', velocidade: '200 km/h'},
        {nome: 'T-cross', cor: 'Rouge', velocidade: '150 km/h'},
        {nome: 'Virtus', cor: 'Jaune', velocidade: '140 km/h'}
    ]

    const voitureCommandée = [...Voiture].sort((a, b) => a.nome.localeCompare(b.nome));

    return (
    <div>
        <h1>Liste des voitures</h1>
        <br></br>
        <ol>
            {Voiture.map( (Voiture) => (
                <li key={Voiture.nome}> {Voiture.nome}, couleur {Voiture.cor}, avec une vitasse maximale de  {Voiture.velocidade}</li>
            )
            )}
        </ol>
    </div>
  )
}

export default SecondComponent