
// function fetchData(silteme) {
//     return new Promise((resolve, reject) => {
//         fetch(silteme).then(natizhe => {
//             if(natizhe.ok){
//                 resolve(natizhe.json())
//             }else{
//                 reject(new Error("Ақпарат алу мүмкін болмады"))
//             }
//         })
//     })

// }




// fetchData("https://jsonplaceholder.typicode.com/users").then(response=>{
//     response.forEach(function (item) {
//         const container = document.getElementById('data-container');
//         const div = document.createElement('div');
//         //    div.textContent = `Қолданушы аты:${item.name}  Email: ${item.email}`;
//         // div.innerHTML = `Қолданушы аты:${item.name}  <br>Email: ${item.email}`;
//         div.innerHTML = `<h3>Қолданушы аты: ${item.name}</h3>
//                         <p>Email: ${item.email}</p>`;
//             div.style.color = 'black';
//             div.style.padding = '10px';
//             div.style.marginBottom = '10px';
//             div.style.border = '1px solid black';
//             div.style.borderRadius = '5px';
//             div.style.backgroundColor = 'lightgrey';
//             div.style.width = '300px';


//             container.appendChild(div);
//     })
// }).catch((err) => {
//     console.log(err.toString());
// })

// function fetchData(silteme) {
    
//     return new Promise((resolve, reject) => {
//         fetch(silteme).then(response => {
//             if (response.ok) {
//                 resolve(response.json())
//             } else {
//                 reject(new Error("Ақпарат алу мүмкін болмады"))
//             }
//         })
//     }    )

// }
// fetchData("https://jsonplaceholder.typicode.com/users").then(natizhe => {
//     // console.log(natizhe);
//     displayData(natizhe);
// }).catch(err => {
//     console.log(err.toString());

// })

// function display(data) {
//     let container = document.querySelector('.container');
//         // console.log(data);
//         data.forEach(element => {
//             console.log(element.name);
//             console.log(element.email);
        
//         let divElement = document.createElement('div');
//         let title = document.createElement('h3');
//         let email = document.createElement('p');

//         divElement.classList.add('card');
//         title.textContent = element.name;
//         email.textContent = element.email;
//         div.appendChild(title);
//         div.appendChild(email);
//         container.appendChild(div);
//         });
//     }
//     displayData(users)


function fetchData(silteme) {
    return new Promise((resolve, reject) => {
        fetch(silteme).then(natizhe => {
            if(natizhe.ok){
                resolve(natizhe.json())
            }else{
                reject(new Error("Ақпарат алу мүмкін болмады"))
            }
        })
    })

}


fetchData("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/products").then(natizhe=>{
        result(natizhe)
       
    }).catch(qate => {
        console.log(qate.toString());
    })

    let res =document.querySelector('result')
    let btn =document.getElementById('search')

    function result(massiv){
        let text =''
        let bar=false

        btn.addEventListener('click',function(e){
            e.preventDefault()
            let input = document.getElementById('input')
            let txt =input.value
            bar = false
        }
        )};



    
    
    