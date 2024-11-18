let word1 =prompt("Бірінші сөз енгізіңіз")
 let word2 =prompt("Екінші сөз енгізіңіз")
 function compareWords( word1, word2){
    if  (word1.toLowerCase()===word2.toLowerCase () ){
        while(word1 == word2){

        }
        return `Сөздер бірдей! ${ word1 +'-' + word2}`
    }   else{
        return `Сөздер әртүрлі! ${ word1 + '-'+ word2}`
    }

 }
 alert(compareWords ( word1, word2))
