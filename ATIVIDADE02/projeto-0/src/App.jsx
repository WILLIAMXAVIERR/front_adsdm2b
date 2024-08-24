import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Avaliação De Matemática - 5°ano A</h1>
     
      <form id="meu-formulario">
        <div class="nome">
          <label htmlFor="nome_aluno" class="form-label">
            Nome completo:    
           </label>
          <input 
            type="text"
            name="form-control"
            id="nome_aluno"
            placeholder="Digite seu nome completo"
          />
        
        </div>
        <div class="matricula">
          <label htmlFor="matricula_aluno" class="form-label">
            Matricula 
          </label>
          <input 
            type="null"
            id="matricula_aluno"
            placeholder="Digite sua matrícula"
          />
        </div>
      
        <button type="submit" class="btn btn-primary">
          Enviar
        </button>
      </form>

      <div id="q1">
        <p className="titulo">
          Questão 1 - Qual o resultado da equação: 258 + 142?
        </p>
        <ul>
          <li id="a1">
            <input
              type="radio"
              name="questao1"
              id="alternativas_a1"
              value="400"
            />
            <label htmlFor="alternativas_a1">A) 400</label>
          </li>
          <li id="b2">
            <input
              type="radio"
              name="questao1"
              id="alternativas_b2"
              value="300"
            />
            <label htmlFor="alternativas_b2">B) 300</label>
          </li>
          <li id="c1">
            <input
              type="radio"
              name="questao1"
              id="alternativas_c1"
              value="324"
            />
            <label htmlFor="alternativas_c1">C) 324</label>
          </li>
          <li id="d1">
            <input
              type="radio"
              name="questao1"
              id="alternativas_d1"
              value="298"
            />
            <label htmlFor="alternativas_d1">D) 298</label>
          </li>
        </ul>
        <div id="resposta1">
          <p class="d-inline-flex gap-1">
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample">
              Mostrar Resposta
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              A resposta correta para a questão 1 é "400". A opção correta é a
              "A"
            </div>
          </div>
        </div>
      </div>
      <div id="q2">
        <p className="titulo">Questão 2 - Qual tag que enumera uma lista?</p>
        <ul>
          <li id="a2">
            <input
              type="radio"
              name="questao2"
              id="alternativa_a2"
              value="li"
            />
            <label htmlFor="alternativa_a2">A) li</label>
          </li>
          <li id="b2">
            <input
              type="radio"
              name="questao2"
              id="alternativa_b2"
              value="ul"
            />
            <label htmlFor="alternativa_b2">B) ul</label>
          </li>
          <li id="c2">
            <input
              type="radio"
              name="questao2"
              id="alternativa_c2"
              value="ol"
            />
            <label htmlFor="alternativa_c2">C) ol</label>
          </li>
          <li id="d2">
            <input
              type="radio"
              name="questao2"
              id="alternativa_d2"
              value="nl"
            />
            <label htmlFor="alternativa_d2">D) nl</label>
          </li>
        </ul>
        <div id="resposta2">
          <p class="d-inline-flex gap-1">
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample">
              Mostrar Resposta
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              A resposta correta para a questão 2 é "ol". A opção correta é a
              "C"
            </div>
          </div>
        </div>
      </div>
      <div id="q3">
        <p className="titulo">Questão 3 - Em qual continente fica o Brasil?</p>
        <ul>
          <li id="a3">
            <input
              type="radio"
              name="questao3"
              id="alternativa_a3"
              value="asia"
            />
            <label htmlFor="alternativa_a3">A) Ásia</label>
          </li>
          <li id="b3">
            <input
              type="radio"
              name="questao3"
              id="alternativa_b3"
              value="africa"
            />
            <label htmlFor="alternativa_b3">B) África</label>
          </li>
          <li id="c4">
            <input
              type="radio"
              name="questao3"
              id="alternativa_c4"
              value="europa"
            />
            <label htmlFor="alternativa_c4">C) Europa</label>
          </li>
          <li id="d4">
            <input
              type="radio"
              name="questao3"
              id="alternativa_d4"
              value="americaDoSul"
            />
            <label htmlFor="alternativa_d4">D) América do Sul</label>
          </li>
        </ul>
        <div id="resposta3">
          <p class="d-inline-flex gap-1">
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample">
              Mostrar Resposta
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              A resposta correta para a questão 3 é "America do Suk". A opção
              correta é a "D"
            </div>
          </div>
        </div>
      </div>
      <div id="q4">
        <p className="titulo">
          Questão 4 - Computadores são feitos de adamantium.
        </p>
        <ul>
          <li id="v1">
            <input type="radio" name="questao4" id="v1" value="verdadeiro" />
            <label htmlFor="v1">Verdadeiro</label>
          </li>
          <li id="f1">
            <input type="radio" name="questao4" id="f1" value="falso" />
            <label htmlFor="f1">Falso</label>
          </li>
        </ul>
        <div id="resposta4">
          <p class="d-inline-flex gap-1">
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample">
              Mostrar Resposta
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              A resposta correta para a questão 4 é "Falso".
            </div>
          </div>
        </div>
      </div>
      <div id="q5">
        <p className="titulo">Questão 5 - Sorvete causa gripe.</p>
        <ul>
          <li id="v2">
            <input type="radio" name="questao5" id="v2" value="verdadeiro" />
            <label htmlFor="v2">Verdadeiro</label>
          </li>
          <li id="f2">
            <input type="radio" name="questao5" id="f2" value="falso" />
            <label htmlFor="f2">Falso</label>
          </li>
        </ul>
        <div id="resposta5">
          <p class="d-inline-flex gap-1">
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample">
              Mostar Resposta
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              A resposta correta para a questão 4 é "Verdadeiro".
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
