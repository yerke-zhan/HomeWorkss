let interval;
let countdown = 5;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const messageElement = document.getElementById('message');

function startCountdown() {
    clearInterval(interval); // Бұрынғы санақты тоқтату
    countdown = 5; // Санақты 5 секундтан бастаймыз
    messageElement.textContent = ''; // Хабарламаны тазарту
    

    // Санақты бастаймыз
    interval = setInterval(() => {
        countdown--;
        timerElement.textContent = `Хабарлама аяқталуына ${countdown} секунд`;
        
        if (countdown === 0) {
            clearInterval(interval); // Санақ аяқталғанда тоқтату
            timerElement.textContent ="";
            messageElement.textContent = 'Уақытыңыз аяқталды! 😊'; // Хабарлама шығару
        }
    }, 1000);
}

// Батырма басылғанда санақты бастау
startButton.addEventListener('click', startCountdown);
