//Синхронды код
// console.log("First");
// console.log("Second");
// console.log("Third");

// // Асинхронды код кезекте ең соңына шығарылады.  Кідіріс 2000 мс=2sec.
// console.log("First");
// setTimeout(() => {
//   console.log("Timeout is working");
// }, 2000);

// console.log("Last");

// Вывод:
// First
// Second
// Third
// First
// Last
// Timeout is working

// let count = 0;
// let interval = setInterval(() => {
//     count++;
//     console.log(`Санақ саны :${count} seconds`);
//     if (count === 5) {
//         clearInterval(interval);
//     }
// }, 1000);
//[Log] Санақ саны :1 seconds 
// [Log] Санақ саны :2seconds 
// [Log] Санақ саны :3 seconds 
// [Log] Санақ саны :4 seconds 
// [Log] Санақ саны :5 seconds

// function fetchData() {
//     console.log("Деректер алу басталды!");
//     let derekterAlyndy = false
   
//         setTimeout(() => {
//             console.log("Дерек:",{name: "John", work: ""});
//             derekterAlyndy = true
//             if (derekterAlyndy) {
//                 console.log("Деректер алынды!")
//             }
//         }, 2000)
//         console.log("Деректер алынуда...")  
//     }
//     fetchData()

// const users =[
//     {name: "John", age: 25, work: "Software Engineer"},
//     {name: "Jane", age: 30, work: "Marketing Manager"},
//     {name: "Bob", age: 40, work: "Sales Manager"},
// ];

// function fetchData() {

//     console.log("Деректер жүктелуде...");
    
//     setTimeout(() => {
//         console.log(users)
//         console.log("Деректер сәтті жүктелді!");
//     }, 2000)
// }
//     fetchData()

// let timer = document.getElementById("timer")
// let san = parseInt(timer.textContent)
// let message = document.getElementById("message");



// let interval = setInterval(() => {
//     san--;
    
//     if (san>0) {
//         timer.textContent = san;
//     }else{
//         clearInterval(interval);
//         timer.textContent = "";
//         message.textContent = "Уақыт аяқталды";

//         }
// }, 1000)

// let button =document.getElementById("startBtn")
// let san = parseInt(message.textContent)
// let message = document.getElementById("mesaj");


// button.addEventListener('click', () => {
//     message.textContent = `Хабарлама аяқталуына ${san}`
//     let interval = setInterval(() => {
//        san=5, san--;
//             if (san>0) {
                
//             }else{
//                 clearInterval(interval);
//                 message.textContent = "";
//                 message.textContent = "Уақытыңыз аяқталды!";
        
//                 }
//         }, 1000)

    
//     })

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
