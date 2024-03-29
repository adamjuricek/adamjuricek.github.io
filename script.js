// Function to fetch data from the server and update the UI
function fetchData() {
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = "<h2>Uploaded Data</h2><p>" + data.replace(/\n/g, "<br>") + "</p>";
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Fetch data initially when the page loads
fetchData();

// Refresh data every 10 seconds
setInterval(fetchData, 10000);
