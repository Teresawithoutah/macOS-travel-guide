// Fetch data from the /distance endpoint
async function fetchDistanceData() {
  try {
    const response = await fetch('/distance');
    const data = await response.json();
    displayDistanceData(data);
  } catch (error) {
    console.error('Error fetching distance data:', error);
    document.getElementById('distance-data').innerText = 'Failed to load data.';
  }
}

// Display the fetched data in the HTML
function displayDistanceData(data) {
  const distanceDataDiv = document.getElementById('distance-data');
  distanceDataDiv.innerHTML = '';

  if (data.rows && data.rows.length > 0) {
    data.rows.forEach((row, rowIndex) => {
      row.elements.forEach((element, elemIndex) => {
        const origin = data.origin_addresses[rowIndex];
        const destination = data.destination_addresses[elemIndex];
        const distanceText = element.distance ? element.distance.text : 'N/A';
        const durationText = element.duration ? element.duration.text : 'N/A';

        const info = `
          <p>
            <strong>Origin:</strong> ${origin}<br>
            <strong>Destination:</strong> ${destination}<br>
            <strong>Distance:</strong> ${distanceText}<br>
            <strong>Duration:</strong> ${durationText}
          </p>
        `;

        distanceDataDiv.innerHTML += info;
      });
    });
  } else {
    distanceDataDiv.innerText = 'No data available.';
  }
}

// Fetch and display the data when the page loads
document.addEventListener('DOMContentLoaded', fetchDistanceData);
