// Botões
document.querySelectorAll(".reiniciar").forEach(function (btn) {
  btn.addEventListener("click", reiniciar);
});

document.querySelector("#inicio-btn").addEventListener("click", iniciaJogo);

document
  .querySelector("#proximoNivel-btn")
  .addEventListener("click", proximoNivel);

// Início + Niveis

function iniciaJogo() {
  document.querySelector("#tela-inicial").classList.remove("visivel");
  iniciar();
}

function iniciar() {
  movimentos = 0;
  reparteCartas(niveis[nivelAtual].cartas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector("#endGame").classList.remove("visivel");
  document.querySelector("#gameOver").classList.remove("visivel");
  document.querySelector("#proximoNivel").classList.remove("visivel");

  document.querySelectorAll(".carta").forEach(function (elemento) {
    elemento.addEventListener("click", revelar);
  });
}

function reiniciar() {
  nivelAtual = 0;
  atualizaNivel();
  iniciar();
}

function atualizaNivel() {
  let nivelTexto = nivelAtual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

function proximoNivel() {
  nivelAtual++;
  atualizaNivel();
  iniciar();
}

// Embaralha

function embaralhaCartas(cartas) {
  let resultado;
  let totalCartas = cartas.concat(cartas);
  resultado = totalCartas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

// Reparte

function reparteCartas(cartas) {
  let coluna = "coluna5";

  let mesa = document.querySelector("#mesa");
  let cartasEmbaralhadas = embaralhaCartas(cartas);
  mesa.innerHTML = "";

  cartasEmbaralhadas.forEach(function (emoji) {
    let carta = document.createElement("div");

    carta.innerHTML =
      "<div class='carta coluna" +
      nivelAtual +
      " ' data-valor= " +
      emoji +
      ">" +
      "<div class='carta__emoji'>" +
      emoji +
      "</div>" +
      "</div>";

    mesa.appendChild(carta);
  });
}
