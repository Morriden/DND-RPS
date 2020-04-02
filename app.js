import { checkResult } from '../function.js/checkResult.js';
import { getRandomThrow } from './function.js/get-random-throw.js';

const buttonStart = document.getElementById('button-start');
const buttonReset = document.getElementById('button-reset');
const winsSpan = document.getElementById('wins');
const lossSpan = document.getElementById('loss');
const drawsSpan = document.getElementById('draws');
const lastResultSpan = document.getElementById('results');

let battlesWon = 0;
let battlesLost = 0;
let battlesDrawn = 0;

const updateSpans = () => {
    winsSpan.textContent = battlesWon;
    lossSpan.textContent = battlesLost;
    drawsSpan.textContent = battlesDrawn;
};

const totalReset = () => {
    battlesWon = 0;
    battlesLost = 0;
    battlesDrawn = 0;
    lastResultSpan.textContent = '';
    updateSpans();
};

const arenaBattle = () => {
    //grab values
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedSide = selectedRadioButton.value;
    

    //make changes to state and dom
    const computerChoice = getRandomThrow();
    const results = checkResult(userSelectedSide, computerChoice);

    if (results === 'You lost!') {
        battlesLost++;
    }
    if (results === 'You won!') {
        battlesWon++;
    }
    if (results === 'It was a draw!') {
        battlesDrawn++;
    }

    lastResultSpan.textContent = 'Your opponent was a ' + computerChoice + ' ' + results;
    updateSpans();
};

buttonStart.addEventListener('click', arenaBattle);

buttonReset.addEventListener('click', totalReset);

