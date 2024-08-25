import { useState } from "react";
import "./App.css";

function App() {
  const [acertos, setAcertos] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const q1 = document.querySelector('input[name="questao1"]:checked');
    const q2 = document.querySelector('input[name="questao2"]:checked');
    const q3 = document.querySelector('input[name="questao3"]:checked');
    const q4 = document.querySelector('input[name="questao4"]:checked');
    const q5 = document.querySelector('input[name="questao5"]:checked');

    const respostasCorretas = {
      questao1: "400",
      questao2: "ol",
      questao3: "americaDoSul",
      questao4: "falso",
      questao5: "falso",
    };

    const respostasSelecionadas = {
      questao1: q1 ? q1.value : "",
      questao2: q2 ? q2.value : "",
      questao3: q3 ? q3.value : "",
      questao4: q4 ? q4.value : "",
      questao5: q5 ? q5.value : "",
    };

    let contadorAcertos = 0;

    for (const [questao, respostaCorreta] of Object.entries(respostasCorretas)) {
      if (respostasSelecionadas[questao] === respostaCorreta) {
        document.getElementById(`${questao}`).style.backgroundColor = "green";
        contadorAcertos++;
      } else {
        document.getElementById(`${questao}`).style.backgroundColor = "red";
      }
    }

    setAcertos(contadorAcertos);
    alert(`Você acertou ${contadorAcertos} questões!`);
  };

  return (
    <div>
      <header>
        <h1>Avaliação</h1>
      </header>

      <main>
        <form id="meu-formulario" onSubmit={handleSubmit}>
          <div className="identificar">
            <label htmlFor="nome_aluno" className="form-label" required>
              Nome completo:
            </label>
            <input
              type="text"
              name="form-control"
              id="nome"
              placeholder="Digite seu nome completo"
              className="input-field"
            />
          </div>

          <div className="identificar">
            <label htmlFor="matricula_aluno" className="form-label" required>
              Matrícula:
            </label>
            <input
              type="text"
              id="matricula"
              placeholder="Digite sua matrícula"
              className="input-field"
            />
          </div>

          <div id="questao1">
            <p className="titulo">
              Questão 1 - Qual o resultado da equação: 258 + 142?
            </p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="questao1"
                  id="alternativas_a1"
                  value="400"
                />
                <label htmlFor="alternativas_a1">A) 400</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao1"
                  id="alternativas_b2"
                  value="300"
                />
                <label htmlFor="alternativas_b2">B) 300</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao1"
                  id="alternativas_c1"
                  value="324"
                />
                <label htmlFor="alternativas_c1">C) 324</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao1"
                  id="alternativas_d1"
                  value="298"
                />
                <label htmlFor="alternativas_d1">D) 298</label>
              </li>
            </ul>
          </div>

          <div id="questao2">
            <p className="titulo">Questão 2 - Qual tag que enumera uma lista?</p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="questao2"
                  id="alternativa_a2"
                  value="li"
                />
                <label htmlFor="alternativa_a2">A) li</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao2"
                  id="alternativa_b2"
                  value="ul"
                />
                <label htmlFor="alternativa_b2">B) ul</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao2"
                  id="alternativa_c2"
                  value="ol"
                />
                <label htmlFor="alternativa_c2">C) ol</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao2"
                  id="alternativa_d2"
                  value="nl"
                />
                <label htmlFor="alternativa_d2">D) nl</label>
              </li>
            </ul>
          </div>

          <div id="questao3">
            <p className="titulo">
              Questão 3 - Em qual continente fica o Brasil?
            </p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="questao3"
                  id="alternativa_a3"
                  value="asia"
                />
                <label htmlFor="alternativa_a3">A) Ásia</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao3"
                  id="alternativa_b3"
                  value="africa"
                />
                <label htmlFor="alternativa_b3">B) África</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao3"
                  id="alternativa_c4"
                  value="europa"
                />
                <label htmlFor="alternativa_c4">C) Europa</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="questao3"
                  id="alternativa_d4"
                  value="americaDoSul"
                />
                <label htmlFor="alternativa_d4">D) América do Sul</label>
              </li>
            </ul>
          </div>

          <div id="questao4">
            <p className="titulo">
              Questão 4 - Computadores são feitos de adamantium.
            </p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="questao4"
                  id="v1"
                  value="verdadeiro"
                />
                <label htmlFor="v1">Verdadeiro</label>
              </li>
              <li>
                <input type="radio" name="questao4" id="f1" value="falso" />
                <label htmlFor="f1">Falso</label>
              </li>
            </ul>
          </div>

          <div id="questao5">
            <p className="titulo">Questão 5 - Sorvete causa gripe.</p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="questao5"
                  id="v2"
                  value="verdadeiro"
                />
                <label htmlFor="v2">Verdadeiro</label>
              </li>
              <li>
                <input type="radio" name="questao5" id="f2" value="falso" />
                <label htmlFor="f2">Falso</label>
              </li>
            </ul>
          </div>

          <button type="submit" className="btn_btn-primary">
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
