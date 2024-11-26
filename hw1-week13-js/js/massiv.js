let players =[ "Ronaldo", "Zidane", "Neymar", "Benzema" ];
console.log (players);


players[1] ="Messi";
console.log (players);

players[4]= "Mbappé";
console.log (players);
players[5]="Beckham"
console.log (players);

let playerNum=[]

let num = +prompt("Number of players")
for ( let i =0; i<num; i++){
    let name = prompt ( (i+1) +" Name of players")
    playerNum[i] = name
  
} console.log (playerNum);
if (num>5){
    console.log ("Көп")
}else if (num<5){
    console.log("Аз")
}