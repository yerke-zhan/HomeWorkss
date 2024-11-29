//1-Тапсырма
let odd=[]
let massiv  = [1,2,3,4,5] //1,8,27,64,125
alert("Бастапқы сандар" +massiv);
let cubed = massiv.map(num=>num*num*num) //Әр сан еселеніп жаңа массивке қосылады.
alert("Кубталған нәтижесі:" +cubed);
for (let num of cubed){ //Индекстерді қолданбай-ақ жұмыс істейді.
    if(num%2==1){
        odd.push(num);  
    }
}
alert("Кубталған нәтиже ішіндегі тақ сандар:" + odd)
// 2-Тапсырма
let bagalar=[]
let san =+prompt("Студент санын енгізіңіз")
for( let i =0; i<san; i++){
    let baga = +prompt((i+1) + " .Студент бағасын енгізіңіз")
bagalar[i] = baga
   
} 
console.log("Енгізілген бағалар:" +bagalar);

let sum =bagalar.reduce((total, num)=>total + num, 0);
    

let average =sum/san;
console.log("Ортақ баға:" + average);

let maxbaga =bagalar.filter(baga =>baga>85);
console.log("85-тен жоғары бағалар:"  +maxbaga);



