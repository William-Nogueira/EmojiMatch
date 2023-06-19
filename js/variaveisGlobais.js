// Variáveis Globais

let movimentos = 0;

let grupoCartas = [
  ["🦄", "🍦", "☂️"],
  ["🌈", "👽"],
  ["🍉", "🤖", "🎃"],
  ["🤡", "💩", "👹", "🐭"],
  ["☠️", "🍕", "👾", "⚽️"],
];

let nivelAtual = 0;
let niveis = [
  {
    cartas: grupoCartas[0],
    movimentosMax: 6,
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1]),
    movimentosMax: 10,
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1], grupoCartas[2]),
    movimentosMax: 16,
  },
  {
    cartas: grupoCartas[0].concat(
      grupoCartas[1],
      grupoCartas[2],
      grupoCartas[3]
    ),
    movimentosMax: 28,
  },
  {
    cartas: grupoCartas[0].concat(
      grupoCartas[1],
      grupoCartas[2],
      grupoCartas[3],
      grupoCartas[4]
    ),
    movimentosMax: 42,
  },
];
