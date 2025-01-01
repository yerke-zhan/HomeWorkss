
let group = document.getElementById('group')
// const selectedValue = document.getElementById('selectedValue')
 group.addEventListener('change', function(){
// selectedValue.textContent = group.value
console.log(group.value)
  
 })

let pikir = document.getElementById('pikir')
let errorMessage = document.getElementById('errorMessage')


form.addEventListener( 'submit', function(event){
event.preventDefault()
let pikirValue = document.getElementById('pikir').value
// console.log(pikirValue)
if (pikirValue.length > 15 || pikirValue ==="") {
  errorMessage.style.color = "red"
errorMessage.textContent = "Пікіріңіз максималды 15 символден құралуы керек."  

} else {
  errorMessage.style.color = "green"
  errorMessage.textContent = "Сіздің пікіріңіз қабылданды."
    
}

})

const inputRange = document.getElementById('input-range')
const textRange = document.getElementById('text-range')
inputRange.addEventListener('input', function(){
  // console.log(inputRange.value + "%")
  textRange.textContent = inputRange.value + "%"})

 

const submit =document.getElementById('submit')
form.addEventListener('submit', function(event){
  event.preventDefault()
  if(group.value && pikir.value && inputRange.value){
    
    let post = {
      group: group.value,
      feedback: pikir.value,
      ratting: inputRange.value
      };
    console.log("Оқушы пікірі бойынша жиналған ақпараттар:", post);

    }else{
      alert("Оқушы пікірі бойынша жиналған ақпарат толық емес!")
  
  
  
  
  // console.log(`Оқушы пікірі бойынша жиналған ақпараттар:
  //   group: ${group.value}, 
  //   feedback: ${pikir.value}, 
  //   ratting: ${inputRange.value}`);
    
  }});
  
   
     




