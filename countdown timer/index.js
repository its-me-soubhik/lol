let timer;
let secondsRemaining = 0;
function startTimer() {
  if (!timer) {
    secondsRemaining =600 ;
    updateTimerDisplay();

    timer = setInterval(function () {
      if (secondsRemaining > 0) {
        secondsRemaining--;
        updateTimerDisplay();
      } else {
        stopTimer();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
  updateTimerDisplay();
}

function resetTimer() {
  stopTimer();
  secondsRemaining = 0;
  updateTimerDisplay();
}

function restartTimer() {
  resetTimer();
  startTimer();
}

function updateTimerDisplay() {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer').innerText = formattedTime;
}
