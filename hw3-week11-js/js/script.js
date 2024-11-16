let student_sany = +prompt("Студенттер санын енгізіңіз")
        let i=1;
        let totalGrade =0;

        while(i<=student_sany){
            
        let student_baga = +prompt (i +"- студенттің бағасын енгізіңіз:")
        totalGrade = totalGrade + student_baga;
        i++;
            
        }

        let ortalama_baga = totalGrade/student_sany
        alert("Студенттердің бағаларының орташа мәні:" + ortalama_baga)

let mumkindik_sany = 3

while (mumkindik_sany>0) {
let suraq = +prompt("Қазақ хандығы қашан құрылды?")
if ( suraq=="1465"){
    alert( " Сіз дұрыс жауап бердіңіз")
    break;
} else{
    mumkindik_sany--; //mumkindik = mumkindik-1
    if ( mumkindik_sany > 0){
        alert (" Сізде" + mumkindik_sany+ "қалды! Қайта бағыңызды сынап көріңіз!")
    } else if (mumkindik_sany ==0){
        alert(" Сізге тарих оқу керек! Ойын аяқталды!")
    }
}
}
