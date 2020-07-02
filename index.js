function submitData() {
    
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

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
        return response.json();
        })
        .then(function(object) {
        let h3 = document.createElement('h3')
        h3.innerHTML = object.id
        document.body.appendChild(h3)
    })

    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        let h3 = document.createElement('h3')
        h3.innerHTML = error.message
        document.body.appendChild(h3)
      });



    
}