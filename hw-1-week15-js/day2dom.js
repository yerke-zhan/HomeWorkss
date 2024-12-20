
let taqyryp =document.querySelector('h1');
taqyryp.textContent ='HW:Introduction to DOM';
console.log(taqyryp.textContent);

let aty = document.getElementById('name')
aty.textContent ='Еркежан апай'
console.log(aty.textContent);

let hobby1 = document.getElementsByClassName('hobby1');
hobby1[0].innerHTML = '<b>Coding</b>';

console.log(hobby1);
let hobby2 = document.getElementsByClassName('hobby2')
hobby2[0].innerHTML = '<b>Teaching</b>'

console.log(hobby2.innerHtml);

let hobby3 = document.getElementsByClassName('hobby3')
hobby3[0].innerHTML = '<b>Reading</b>'

console.log(hobby3.innerHtml);

