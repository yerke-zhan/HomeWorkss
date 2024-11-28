let sandar=[]

while( true){
    let san = +prompt(" Сан енгізіңіз?")

     if (san %2 == 0){
        sandar.unshift(san)
                    
    }else {
        sandar.push(san)
                    
}
if (san==0){
    break;
}

} console.log( sandar)
