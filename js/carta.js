// Clique na carta

function revelar() {
  let cartasReveladas;
  let totalReveladas = document.querySelectorAll(".revelada:not(.acerto)");

  if (totalReveladas.length > 1) {
    return;
  }

  this.classList.add("revelada");
  audioCarta = document.querySelector("#audio-carta");
  audioCarta.volume = 0.8;
  audioCarta.cloneNode().play();

  cartasReveladas = document.querySelectorAll(".revelada:not(.acerto)");
  if (cartasReveladas.length < 2) {
    return;
  }

  comparar(cartasReveladas);
}

// Carta coringa

function revelarTodasAsCartas() {
  audioAcerto = document.querySelector("#audio-ding");
  audioAcerto.volume = 0.8;
  audioAcerto.play();
  document.querySelectorAll(".carta:not(.acerto)").forEach(function (elemento) {
    elemento.classList.add("revelada");
  });

  setTimeout(function () {
    document
      .querySelectorAll(".carta:not(.acerto)")
      .forEach(function (elemento) {
        elemento.classList.remove("revelada");
      });
  }, 2000);
}

function usarCartaCoringa() {
  revelarTodasAsCartas();
  document.querySelector("#carta-coringa").style.display = "none";
}

// Verifica se acertou ou errou

function comparar(cartas) {
  if (cartas[0].dataset.valor === cartas[1].dataset.valor) {
    acertou(cartas);
  } else {
    errou(cartas);
  }
}

// Acerto

function acertou(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("acerto");
  });
  audioAcerto = document.querySelector("#audio-acertou");
  audioAcerto.volume = 0.8;
  audioAcerto.play();
  atualizaContador();
  cartasNaoReveladas = document.querySelectorAll(".carta:not(.acerto)");
  if (cartasNaoReveladas.length === 0) {
    setTimeout(fimRodada, 1000);
  } else if (movimentos > niveis[nivelAtual].movimentosMax - 1) {
    setTimeout(function () {
      document.querySelector("#gameOver").classList.add("visivel");
    }, 1000);
    return;
  }
}

// Erro

function errou(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("errou");
  });

  let audioErrou = document.querySelector("#audio-errou");
  audioErrou.volume = 0.3;
  audioErrou.play();
  atualizaContador();
  setTimeout(function () {
    cartas.forEach(function (elemento) {
      elemento.classList.remove("revelada");
      elemento.classList.remove("errou");
    });
  }, 1000);

  if (movimentos > niveis[nivelAtual].movimentosMax - 1) {
    setTimeout(function () {
      document.querySelector("#gameOver").classList.add("visivel");
    }, 1000);
    return;
  }
}

// Contador de Movimentos

function atualizaContador() {
  let movimentosTexto;
  movimentos++;
  movimentosTexto = movimentos;

  if (movimentos < 10) {
    movimentosTexto = "0" + movimentos;
  }
  document.querySelector("#mov").innerText = movimentosTexto;
}

function maxContador() {
  let movimentosMaxTexto = niveis[nivelAtual].movimentosMax;
  if (movimentosMaxTexto < 10) {
    movimentosMaxTexto = "0" + movimentosMaxTexto;
  }
  document.querySelector("#mov-total").innerText = movimentosMaxTexto;
}

// Modal Próximo Nivel

function fimRodada() {
  if (nivelAtual < niveis.length - 1) {
    document.querySelector("#proximoNivel").classList.add("visivel");
  } else {
    document.querySelector("#endGame").classList.add("visivel");
  }
}
