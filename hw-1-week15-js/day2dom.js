
let title =document.querySelector('title');
title.textContent ='HW:Introduction to DOM.';
console.log(title.textContent);

let aty = document.getElementById('name')
aty.textContent ='Еркежан апай'
console.log(aty.textContent);

let hobby1 = document.getElementsByClassName('hobby1')
hobby1.innerHtml = 'li class="hobby1"><b>Coding</b></li> '

console.log(hobby1.innerHtml);
let hobby2 = document.getElementsByClassName('hobby2')
hobby2.innerHtml = 'li class="hobby2"><b>Teaching</b></li> '

console.log(hobby2.innerHtml);

let hobby3 = document.getElementsByClassName('hobby3')
hobby3.innerHtml = 'li class="hobby3"><b>Reading</b></li> '

console.log(hobby3.innerHtml);

