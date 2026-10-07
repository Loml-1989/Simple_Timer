const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function formatTime(time) {
    const totalSeconds = Math.floor(time/1000);
    const minutes = String(Math.floor(totalSeconds/60)).padStart(2, '0');
}