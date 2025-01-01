// Деректер массиві
const data = [
    {title:'"Абай жолы" -Мұхтар Әуезов',
    description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.'},
    {title:'"Қан мен тер" -Әбдіжәміл Нұрпейісов',
    description: 'Қазақ халқының қиын қыстау кезеңдерінің эпикалық баяны.'},
    {title:'"Көшпенділер" - Ілияс Есенберлин',
    description: 'Қазақ хандығының қалыптасу тарихы.'},
    {title: '"За нами Москва" - Александр Бек',
    description: 'Панфиловшылардың ержүректігі туралы тарихи деректі роман'

    },
];


        // Карточкаларды шығару функциясы
        function renderCards() {
            const container = document.getElementById('cards-container');
            container.innerHTML = ''; // Бастапқыда контейнерді тазалау

            // Әрбір дерек үшін карта құру
            data.forEach(item => {
                // Карта элементі
                const card = document.createElement('div');
                card.classList.add('card');

                // Тақырып қосу
                const title = document.createElement('h3');
                title.textContent = item.title;

                // Сипаттама қосу
                const description = document.createElement('p');
                description.textContent = item.description;

                let button = document.createElement('button');
                button.textContent = 'Жою';
                button.style.marginTop = '10px';

                // Картаға тақырып пен сипаттаманы қосу
                card.appendChild(title);
                card.appendChild(description);
                card.appendChild(button);
// Картаны жою үшін қолдану

const parent =document.getElementById('cards-container');
const child =document.getElementById('card');
    button.addEventListener('click', () => {
    parent.removeChild(card);
    alert('The card is removed');  
 });
// Контейнерге картаны қосу
                container.appendChild(card);


            
            });
        }

        // Деректерді шығару
        renderCards();