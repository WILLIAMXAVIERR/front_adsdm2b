document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const q1 = document.querySelector('input[name="questao1"]:checked');
    const q2 = document.querySelector('input[name="questao2"]:checked');
    const q3 = document.querySelector('input[name="questao3"]:checked');
    const q4 = document.querySelector('input[name="questao4"]:checked');
    const q5 = document.querySelector('input[name="questao5"]:checked');

    const a1 = "400";
    const b3 = "ol";
    const d4 = "africa";
    const f1 = "falso";
    const f2 = "falso";

    const a1Element = document.getElementById("a1");
    const b2Element = document.getElementById("b3");
    const d4Element = document.getElementById("d4");
    const f1Element = document.getElementById("f1");
    const f2Element = document.getElementById("f2");

    function updateBackgroundColor(element, isCorrect) {
      if (element) {
        element.style.backgroundColor = isCorrect ? "green" : "red";
      }
    }

    updateBackgroundColor(a1Element, q1 && q1.value === a1);
    updateBackgroundColor(b2Element, q2 && q2.value === b3);
    updateBackgroundColor(d4Element, q3 && q3.value === d4);
    updateBackgroundColor(f1Element, q4 && q4.value === f1);
    updateBackgroundColor(f2Element, q5 && q5.value === f2);

    function acertos() {
      let acertos = 0;

      if (q1 && q1.value === a1) acertos++;
      if (q2 && q2.value === b3) acertos++;
      if (q3 && q3.value === d4) acertos++;
      if (q4 && q4.value === f1) acertos++;
      if (q5 && q5.value === f2) acertos++;

      return acertos;
    }

  alert("Você acertou ${acertos()} questões!");

  });