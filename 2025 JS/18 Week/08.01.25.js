const cards = document.querySelector(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        flipCard(card);
    })
})



let images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHsC8snnrI-fVN4bRI9Ua1hz_s-iFOG9HJA&s",
    "https://img.freepik.com/free-photo/man-figure-skating-isolated-white-wall-with-copyspace_155003-37156.jpg",
    "https://thumb.ac-illust.com/e6/e6fafaf4d4a2b55635f1a16225a76321_t.jpeg",
    "https://www.pngitem.com/pimgs/m/136-1366595_snowboard-man-png-image-snowboarder-png-transparent-png.png",
    "https://thumb.ac-illust.com/e6/e6fafaf4d4a2b55635f1a16225a76321_t.jpeg",
    "https://img.freepik.com/free-photo/man-figure-skating-isolated-white-wall-with-copyspace_155003-37156.jpg",
    "https://friendlystock.com/wp-content/uploads/2018/05/1-little-boy-building-snowman-cartoon-clipart.jpg",
    "https://e7.pngegg.com/pngimages/692/215/png-clipart-tubing-snow-snowtubing-s-cartoon-fictional-character.png",
    "https://i.pinimg.com/1200x/c1/76/67/c17667a4b0da6347a454b8f844ed78bd.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/95/57/happy-woman-making-snow-angel-flat-vector-18349557.jpg",
    "https://www.pngitem.com/pimgs/m/136-1366595_snowboard-man-png-image-snowboarder-png-transparent-png.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHsC8snnrI-fVN4bRI9Ua1hz_s-iFOG9HJA&s",
    "https://e7.pngegg.com/pngimages/692/215/png-clipart-tubing-snow-snowtubing-s-cartoon-fictional-character.png",
    "https://friendlystock.com/wp-content/uploads/2018/05/1-little-boy-building-snowman-cartoon-clipart.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/95/57/happy-woman-making-snow-angel-flat-vector-18349557.jpg",
    "https://i.pinimg.com/1200x/c1/76/67/c17667a4b0da6347a454b8f844ed78bd.jpg"
    ];

    function shuffleCards(){
        images.sort(()=> Math.random()>0.5?-1:1);
        cards.forEach((card, index)=>{
            const img= card.querySelector(".back img");
            img.src =images[index];
        });

    }
     


