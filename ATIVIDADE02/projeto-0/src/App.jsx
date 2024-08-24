import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Avaliação De Matemática - 5°ano A</h1>

      <div className="multipla_escolha1">
        <ul>
          <p className="titulo">
            Questão 1 - Qual o resultado da equação: 258 + 142?
          </p>

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
        <div className = "resposta1">
          <p class="d-inline-flex gap-1">
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample">
              Link with href
            </a>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample">
              Button with data-bs-target
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              A resposta correta para essa questao é 400, opção "A"
            </div>
          </div>
        </div>
      </div>

      <div className="multipla_escolha">
        <p className="titulo">Questão 2 - Qual tag é numera uma lista?</p>
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

      <div class="multipla_escolha">
        <p class="titulo">Questão 3 - Em qual continente fica o Brasil?</p>
        <ul>
          <li>
            <input
              type="radio"
              name="questao3"
              id="alternativa_a3"
              value="asia"
            />
            <label htmlFor="asia">A) Ásia</label>
          </li>
          <li>
            <input
              type="radio"
              name="questao3"
              id="alternativa_b3"
              value="africa"
            />
            <label htmlFor="africa">B) África</label>
          </li>
          <li>
            <input
              type="radio"
              name="questao3"
              id="alternativa_b4"
              value="europa"
            />
            <label htmlFor="europa">C) Europa</label>
          </li>
          <li>
            <input
              type="radio"
              name="questao3"
              id="alternativa"
              value="americaDoSul"
            />
            <label htmlFor="americaDoSul">D) América do Sul</label>
          </li>
        </ul>
      </div>

      <div class="verdadeiro_ou_falso">
        <p class="titulo">Questão 4 - Computadores são feitos de adamantium.</p>
        <ul>
          <li>
            <input type="radio" name="questao4" id="v1" value="verdadeiro" />
            <label htmlFor="verdadeiro">Verdadeiro</label>
          </li>
          <li>
            <input type="radio" name="questao4" id="f1" value="falso" />
            <label htmlFor="falso">Falso</label>
          </li>
        </ul>
      </div>

      <div class="verdadeiro_ou_falso">
        <p class="titulo">Questão 5 - Sorvete causa gripe.</p>
        <ul>
          <li>
            <input type="radio" name="questao5" id="v2" value="verdadeiro2" />
            <label htmlFor="verdadeiro">Verdadeiro</label>
          </li>
          <li>
            <input type="radio" name="questao5" id="f2" value="falso2" />
            <label htmlFor="falso">Falso</label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
