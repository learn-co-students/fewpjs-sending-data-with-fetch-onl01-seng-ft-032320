// Add your code here
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

//   let userdata = {
//     name: "Steve",
//     email: "steve@steve.com"

//   };

//   let objconfig = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(userdata)
//   }
   
  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    });

    function submitData(name, email) {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                name: "Steve",
                email: "steve@steve.com"
            })

        })

        .then(function(response) {
            return response.json()
        })

        .then(function(object) {
            let body = document.body 
            let thing = object.id 
            body.innerHTML = thing  
        })

        .catch(function(error) {
            let mess = 'Unauthorized Access'
            let body = document.body
            body.innerHTML = mess
            console.log(error.message)
            
              
        });

    }