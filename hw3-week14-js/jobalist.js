let student1 =
    {
    name: "Asan",
    age: 15,
    grades: {
        math: 85,
        english:90,
        science:80,
    },
    address:{
        city:" Almaty",
        street: "Abaya",
    }
},
    student2 =
        {
    name: "Anel",
    age: 16,
    grades: {
        math: 95,
        english:98,
        science:90,
    },
    address:{
        city:" Almaty",
        street: "Dostyk",
    }
    
};
 
let{name,grades,address} = student2;

let student3 ={ ...student2, address, country:"Қазақстан" }


console.log(student3);

// student2.address=({...address, country: "Қазақстан"});

// console.log(student2)

// student2.address.push({country:"Қазақстан"})

console.log(`Esimi: ${name} \nMatematika bagasy: ${grades.math}  \nQalasy: ${address.city} \nMemleketi: ${student3.country} `);



const classA= ["Amina","Adil","Adina"];
const classB=["Berik","Bahit", "Bayan"];
let newlist =[...classA, ...classB];
console.log(newlist);

// newlist.unshift("Директор")
// newlist.push("Мұғалім")

let lastlist =["Директор", ...classA,...classB,"Мұғалім"]

console.log(lastlist); 
    