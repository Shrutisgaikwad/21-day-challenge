const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
const fetchDataFromAPI = () => {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched Data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};
fetchDataFromAPI();
