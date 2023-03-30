const apiURL = 'https://jsonplaceholder.typicode.com/posts/123456789';

fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // do something with the data
    console.log(data);
  })
  .catch(error => {
    // handle the error
    console.error('There was a problem fetching data:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'There was a problem fetching data. Please try again later.';
    document.body.appendChild(errorMessage);
  });
