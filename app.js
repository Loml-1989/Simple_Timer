const display = document.querySelector('.display-time'); 
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function formatTime(time) {
    const totalSeconds = Math.floor(time/1000);
    const minutes = String(Math.floor(totalSeconds/60)).padStart(2, '0');
    const seconds = String(totalSeconds%60).padStart(2, '0');
    return `${minutes}:${seconds}`; 
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', () => {
    if (!timeInterval) {
        startTime = Date.now()-elapsedTime;
        timeInterval = setInterval(() => {
            elapsedTime = Date.now()-startTime;
            updateDisplay();
        }, 10);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timeInterval);
    timeInterval = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timeInterval);
    timeInterval = null;
    elapsedTime = 0;
    updateDisplay();
});