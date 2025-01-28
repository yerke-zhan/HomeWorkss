//  localStorage.setItem('name', 'Galymbek')
//  localStorage.setItem('surname', 'Batyrbek')
//  localStorage.setItem('hobby', 'Coding')

// sessionStorage.setItem('name', 'Galymbek')
// sessionStorage.setItem('surname', 'Batyrbek')
// sessionStorage.setItem('hobby', 'Coding')
 
 
//  let name = localStorage.getItem('name')
//  let surname = localStorage.getItem('surname')
//  let hobby = localStorage.getItem('hobby')
//  let div = document.createElement('div')
//  div.innerHTML=`<h2>${name}</h2>
//  <h3>${surname}</h3>
//  <p>${hobby}</p>`
//  document.body.appendChild(div)

//  console.log(name, surname, hobby)
// let name = sessionStorage.getItem('name')
//  let surname = sessionStorage.getItem('surname')
//  let hobby = sessionStorage.getItem('hobby')
//  let div = document.createElement('div')
//  div.innerHTML=`<h2>${name}</h2>
//  <h3>${surname}</h3>
//  <p>${hobby}</p>`
//  document.body.appendChild(div)

//  console.log(name, surname, hobby)

// let saveBtn = document.getElementById('save')
// let showBtn = document.getElementById('show')
// let clearBtn = document.getElementById('clear')

// saveBtn.addEventListener('click', function(e) {
//     e.preventDefault()
//     let name = document.getElementById('name').value
//     let age = document.getElementById('age').value

//   localStorage.setItem('aty', name)
//   localStorage.setItem('jasy', age)
//   console.log(name, age)
//   alert('Data saved successfully')
// })

// showBtn.addEventListener('click', function(e) {
//   e.preventDefault()

// let isim = localStorage.getItem('aty')
// let yas = localStorage.getItem('jasy')

//  if(isim&& yas) {

//  let div = document.createElement('div')
//  div.innerHTML=`<h2>${isim}</h2>
//  <p>${yas}</p>`
//  document.body.appendChild(div)

//  }
 
// })
//  clearBtn.addEventListener('click', function(e) {
//     localStorage.clear()
//     window.location.reload() //обновление страницы
//     console.log('Data cleared successfully')
//  })



// 2. Тапсырма


let saveBtn = document.getElementById('save')
let showBtn = document.getElementById('show')
let clearBtn = document.getElementById('clear')
let derek =[]

saveBtn.addEventListener('click', function(e) {
    e.preventDefault()
    let name = document.getElementById('name')
    let age = document.getElementById('age')
    
    if(name&&age){
      derek.push({name: name.value, age: age.value})
      console.log(derek);

      localStorage.setItem('derek', JSON.stringify(derek))
      name.value = ''
      age.value = ''
    }
})

showBtn.addEventListener('click', function(e) {
  e.preventDefault()

 let derek = JSON.parse(localStorage.getItem('derek'))
 console.log(derek);

 if(derek){
  derek.forEach(function(item){
    let div = document.createElement('div') 
    div.innerHTML = `<h2>${item.name}</h2>
    <p>${item.age}</p>`
    
    document.body.appendChild(div)
  })
 }
 
})
 clearBtn.addEventListener('click', function(e) {
    localStorage.clear()
    window.location.reload() //обновление страницы
    console.log('Data cleared successfully')
 })










