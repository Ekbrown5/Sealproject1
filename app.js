function searchCharacter() {
    const searchInput = document.getElementById('search-input').value;
    const resultsDiv = document.getElementById('results');

    const apiUrl = 'https://rickandmortyapi.com/api/character/';
    const searchUrl = apiUrl + '?name=' + encodeURIComponent(searchInput);

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data.results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayResults(characters) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (characters.length > 0) {
        const ul = document.createElement('ul');
        characters.forEach(function(character) {
            const li = document.createElement('li');
            
            // Creates an image element
            const img = document.createElement('img');
            img.src = character.image; // Sets the image source to the character's image link
            img.alt = character.name; // Set alternative text for accessibility
            
            // Creates a paragraph element to display character information
            const p = document.createElement('p');
            p.textContent = `Name: ${character.name} - Status: ${character.status} - Species: ${character.species}`;
            
            // Appends the image and paragraph elements to the list item
            li.appendChild(img);
            li.appendChild(p);

            // Appends the list item to the unordered list
            ul.appendChild(li);
        });
        
        // Appends the unordered list to the HTML element with the ID 'results'
        resultsDiv.appendChild(ul);
    } else {
        resultsDiv.innerHTML = '<p>No characters found.</p>';
    }
}