
let tapsyrmalar =[ "Exercice -1", "Жаттығу-4", "Reading", "Essay"]

let oryndalgan =[]
let oryndalmagan =[]


function askHomework(){

for (let i = 0; i<tapsyrmalar.length; i++){
    let check = prompt(i+1+ `. Did you do the following homework? ${tapsyrmalar[i]}. \nEnter a number if yes, or anything else if no.` );

if (!isNaN (check) && check!== ""){
oryndalgan.push (tapsyrmalar[i]);
alert("Your answer has been added to the answered homework list.");

}
else {
    oryndalmagan.push(tapsyrmalar[i]);
    
    alert("Your answer has been added to the NOT answered homework list.");
}
alert("Answered Homework:"+oryndalgan);
alert("Not answered Homework:", oryndalmagan);

}

}

askHomework();



