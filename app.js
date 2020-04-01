import { rockPaperScissors } from '../function.js/get-random-throw.js';

const buttonStart = document.getElementById('button-start');
const buttonReset = document.getElementById('button-reset');
const winsSpan = document.getElementById('wins');
const lossSpan = document.getElementById('loss');
const drawsSpan = document.getElementById('draws');

let battlesWon = 0;
let battlesLost = 0;
let battlesDrawn = 0;

let computerChoice = Math.floor(Math.random() * 3 + 1);

