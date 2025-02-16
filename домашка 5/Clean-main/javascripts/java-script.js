document.addEventListener('DOMContentLoaded', function () {
   
    let clickCount = 0;
    const btnClick = document.querySelector('.clickButton');
    const counterDisplay = document.querySelector('#clickCount');
    const alertMessage = document.querySelector('.message');

    btnClick.addEventListener('click', function () {
        clickCount++;
        counterDisplay.textContent = clickCount;

        if (clickCount >= 15) {
            btnClick.disabled = true;
            alertMessage.textContent = "Вы достигли максимального количества кликов!";
        }
    });

  
    let timeLeft = 10;
    const countdownDisplay = document.querySelector('.countdown-timer');
    const resetCountdownBtn = document.querySelector('.resetCountdownButton');
    let countdown;

    function startCountdown() {
        clearInterval(countdown);
        countdown = setInterval(function () {
            timeLeft--;
            countdownDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                countdownDisplay.textContent = "Время вышло!";
            }
        }, 1000);
    }

    resetCountdownBtn.addEventListener('click', function () {
        clearInterval(countdown);
        timeLeft = 10;
        countdownDisplay.textContent = timeLeft;
        startCountdown();
    });

    startCountdown();

   
    let timeCount = 0;
    let timerInterval;
    const stopwatchDisplay = document.querySelector('.stopwatch-timer');
    const startBtn = document.querySelector('.startButton');
    const stopBtn = document.querySelector('.stopButton');
    const resetBtn = document.querySelector('.resetButton');

    startBtn.addEventListener('click', function () {
        if (!timerInterval) {
            timerInterval = setInterval(function () {
                timeCount++;
                stopwatchDisplay.textContent = timeCount;
            }, 1000);
        }
    });

    stopBtn.addEventListener('click', function () {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    resetBtn.addEventListener('click', function () {
        clearInterval(timerInterval);
        timerInterval = null;
        timeCount = 0;
        stopwatchDisplay.textContent = timeCount;
    });

});
