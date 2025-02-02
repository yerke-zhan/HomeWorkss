document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('filmForm');
    const filmContainer = document.getElementById('filmContainer');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');

    
    loadFilmsFromLocalStorage();

   
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const filmName = document.getElementById('filmName').value;
        const filmGenre = document.getElementById('filmGenre').value;
        const imageLink = document.getElementById('imageLink').value;

        
        const film = {
            name: filmName,
            genre: filmGenre,
            image: imageLink
        };

        
        saveFilmToLocalStorage(film);

        form.reset();

        displayFilm(film);
    });

    
    addButton.addEventListener('click', function() {
        fetchData('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films');
    });

    
    clearButton.addEventListener('click', function() {
        clearAllFilms();
    });

    
    function saveFilmToLocalStorage(film) {
        let films = JSON.parse(localStorage.getItem('films')) || [];
        films.push(film);
        localStorage.setItem('films', JSON.stringify(films));
        displayFilm(film);
    }

    
    function loadFilmsFromLocalStorage() {
        let films = JSON.parse(localStorage.getItem('films')) || [];
        films.forEach(displayFilm);
    }

    
    function displayFilm(film) {
        const filmDiv = document.createElement('div');
        filmDiv.classList.add('film-item');

        const img = document.createElement('img');
        img.src = film.image;
        img.alt = film.name;

        const h1 = document.createElement('h1');
        h1.textContent = film.name;
        

        const p = document.createElement('p');
        p.textContent = film.genre;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeFilmFromLocalStorage(film);
            filmContainer.removeChild(filmDiv);
        });

        filmDiv.appendChild(img);
        filmDiv.appendChild(h1);
        filmDiv.appendChild(p);
        filmDiv.appendChild(removeButton);

        filmContainer.appendChild(filmDiv);
    }

   
    function removeFilmFromLocalStorage(filmToRemove) {
        let films = JSON.parse(localStorage.getItem('films')) || [];
        films = films.filter(film => film.name !== filmToRemove.name || film.image !== filmToRemove.image);
        localStorage.setItem('films', JSON.stringify(films));
    }

    
    fetchData('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films')
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            const data = await response.json();
            
            data.forEach(film => {
                saveFilmToLocalStorage(film);
            });
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to fetch data from the URL.');
        }
    }

    
    function clearAllFilms() {
        localStorage.removeItem('films');
        filmContainer.innerHTML = '';
    }
});
