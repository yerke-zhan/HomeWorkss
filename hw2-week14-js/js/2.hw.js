
const artists =[
    {name: "Michael Jackson", songs: ["Smooth Criminal", "Billie Jean", "Beat it","Earth song"]},
    {name: "Billie Eilish", songs:["Bad Guy", "Lovely", "Lunch", "Chihiro"]},
    {name: "Kairat Nurtas", songs:["Auyrmaidy zhurek","Ol sen emes"]}
]
console.log(artists);//1
artists[2].songs[1]="Baiqa";//2
console.log(artists);
console.log(`${artists[0].name} -> ${artists[0].songs[3]}`)//3
console.log(artists[1].songs.filter(param=>param.length<=6))//4
