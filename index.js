// Add your code here

function submitData() {
    return fetch("http://localhost:3000/users", configObj).
        then(function(response) {
        return response.json();
      })
      .then(function(object) {
        document.querySelector('body').innerHTML += object.id;
      })
      .catch(function(error) {
        alert("Unauthorized Access");
        document.querySelector('body').textContent += error.message;
      });;

}

let formData = {
    name: "Steve",
    email: "steve@steve.com"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  fetch("http://localhost:3000/dogs", configObj);

