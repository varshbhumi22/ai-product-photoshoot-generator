// script.js

// Function to make an API call
async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example function to handle form submission
document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const apiUrl = 'https://api.example.com/data'; // API endpoint
    const result = await fetchData(apiUrl);
    console.log(result);
});