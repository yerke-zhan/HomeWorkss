let savebtn = document.getElementById('savebtn')
let clearBtn = document.getElementById('clearbtn')

let derek =[]

savebtn.addEventListener('click', function(e) {
    e.preventDefault()
    let note = document.getElementById('text')
    // this.textContent = 
    
    
    if(note){
      derek.push({note: note.value})
      console.log(derek);

      localStorage.setItem('derek', JSON.stringify(derek))
      note.value = ''
      
    }
})
  
 
 clearBtn.addEventListener('click', function(e) {
    localStorage.clear()
    window.location.reload() //обновление страницы
    console.log('Data cleared successfully')
 })





