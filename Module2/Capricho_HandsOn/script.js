// Select elements
const getFactsBtn = document.getElementById('getFactsBtn');
const factsDisplay = document.getElementById('factsDisplay');

// Function to fetch dog facts
function fetchDogFacts() {
    // Show loading message
    factsDisplay.innerHTML = '<p>Loading dog facts... 🐕</p>';

    // Fetch data from the API
    fetch('https://dogapi.dog/api/v1/facts?number=5&raw=true')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // Use .text() instead of .json() for raw response
        })
        .then(data => {
            // Format the dog facts
            const facts = data.split('\n').map(fact => `<p>🐶 ${fact}</p>`).join('');
            // Display the dog facts
            factsDisplay.innerHTML = `
                <h2>Here are some fun dog facts:</h2>
                ${facts}
            `;
        })
        .catch(error => {
            console.error('Error fetching dog facts:', error);
            factsDisplay.innerHTML = '<p>Failed to load dog facts. Please try again. 🐾</p>';
        });
}

// Add event listener to the button
getFactsBtn.addEventListener('click', fetchDogFacts);