let san = +prompt("Eki oryndy can engiz")
for (let i=1; i<=san; i++){
    if ( i%3==0 && i%5==0){
        console.log(" 3-ке және 5-ке қалдықсыз бөлінетін сан: " +i)
        if (i%2==0) {
            console.log (i + " - Саны 3-ке және 5-ке қалдықсыз бөлінетін және ЖҰП сан. BREAK!");
       break

        }
    }
}