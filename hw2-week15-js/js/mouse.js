Tuyme = document.getElementById('Button1')
Tuyme.addEventListener("click", function(){
       container.style.backgroundColor ="green"
 })
 let Tuyme2 = document.getElementById('Button2')
Tuyme2.addEventListener("click", function(){
       container.style.width = ( parseInt(container.style.width) +20) +"px";
       
 })
 let Tuyme3 = document.getElementById('Button3')
Tuyme3.addEventListener("click", function(){
       container.style.height =( parseInt(container.style.height) +20) +"px";
       
 })

 let qorapsha = document.getElementById('container')
 qorapsha.addEventListener("mouseenter",function(){
    qorapsha.textContent = "Сіздің мышкаңыз қораптың ішінде!" 
    qorapsha.style.textAlign = "center"
 })
 qorapsha.addEventListener("mouseleave" , function(){
      qorapsha.textContent ="Сіздің мышкаңыз қораптан шығып кетті!"
      qorapsha.style.textAlign = "center"
      })