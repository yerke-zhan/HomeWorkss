
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




fetchData("https://jsonplaceholder.typicode.com/users").then(response=>{
    response.forEach(function (item) {
        const container = document.getElementById('data-container');
        const div = document.createElement('div');
        //    div.textContent = `Қолданушы аты:${item.name}  Email: ${item.email}`;
        // div.innerHTML = `Қолданушы аты:${item.name}  <br>Email: ${item.email}`;
        div.innerHTML = `<h3>Қолданушы аты: ${item.name}</h3>
                        <p>Email: ${item.email}</p>`;
            div.style.color = 'black';
            div.style.padding = '10px';
            div.style.marginBottom = '10px';
            div.style.border = '1px solid black';
            div.style.borderRadius = '5px';
            div.style.backgroundColor = 'lightgrey';
            div.style.width = '300px';


            container.appendChild(div);
    })
}).catch((err) => {
    console.log(err.toString());
})

fetchData();