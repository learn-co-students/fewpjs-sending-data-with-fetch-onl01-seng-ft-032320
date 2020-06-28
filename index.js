// Add your code here
function submitData (username, email) {
    let formData = {
        name: username,
        email: email
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
      let newUser = document.createElement('p');
        newUser.id = object.id;
      let newId = document.createTextNode(`${object.id}`);
        newUser.appendChild(newId);
        document.body.appendChild(newUser);    
    })
    .catch(function(error) {
      
      let newMessage = document.createElement('p');
      newMessage.id = "Unauthorized Access";
    let newNode = document.createTextNode(`${newMessage.id}`);
      newMessage.appendChild(newNode);
      document.body.appendChild(newMessage);  


      alert("Unauthorized Access");
      console.log(error.message);
  
    });

};