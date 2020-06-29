// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
          let h2 = document.createElement('h2');
          h2.innerHTML = data.id;
          document.body.appendChild(h2);
          console.log(data);
      })
      .catch(function(error){
          let h3 = document.createElement('h3');
          h3.innerHTML = error.message;
          document.body.appendChild(h3);
          console.log(error.message)
      })
}

submitData("tinto","tinto@gmail.com")
