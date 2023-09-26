listenToFormSubmits();

function listenToFormSubmits() {
  const forms = document.querySelectorAll('form'); // get all forms on the page

  forms.forEach(form => {
    form.addEventListener('submit', event => {

      const formData = new FormData(form); // get the form data
      const fields = {}; // create an object to store the fields

      for (const [name, value] of formData) {
        fields[name] = value; // add each field to the object
      }
      console.log(fields);

      const url = 'https://jsonplaceholder.typicode.com/posts'; 
      const options = {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });
  });
}
