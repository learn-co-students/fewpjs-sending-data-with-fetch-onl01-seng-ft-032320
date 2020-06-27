// Add your code here
function displayError(error) {
   console.log(error)
   let p = document.createElement("p")
   document.body.appendChild(p).innerHTML = error
   }

function showData(data) {
   console.log(data)
   let p = document.createElement("p")
   document.body.appendChild(p).innerHTML = data.id
}

function submitData(userName,userEmail) {
   let user = {
      name: userName,
      email: userEmail
   }

   let configObj = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
      },
      body: JSON.stringify(user)
   }

   return fetch("http://localhost:3000/users", configObj)
   .then((response) =>response.json())
   .then((data) => showData(data))
   .catch((error) => displayError(error))
}