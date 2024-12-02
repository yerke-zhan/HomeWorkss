let soccer= {
name: "Ronaldo",
surname: "Cristiano",
age: 39,
goals: 900,
teams: ["Sporting CP (2002–2003)","Manchester United (2003–2009)",
        "Real Madrid (2009–2018)","Juventus (2018–2021)","Al-Nassr (2024)"],
addGoal:function(newgoals){
    return this.goals + newgoals;

    },
info: function(){
        return  `Name:${this.name}
                Surname:${this.surname}
                Age: ${this.age}
                Goals:${this.goals}
                Teams:${this.teams} `
         },

shorter:function(){
        return `${this.name} ${ this.surname}`;
},

team: function(){
        return `Current Team is: ${this.teams [4]}`
}

    }; 
   

alert(soccer.info());
alert(`The latest goals number:${soccer.addGoal(2)}`);
console.log( soccer.shorter());
console.log(soccer.team())







