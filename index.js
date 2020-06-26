// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };
    console.log(JSON.stringify(formData))

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
       

    return fetch("http://localhost:3000/users",configObj)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            appendOutput(object.id)
        })
        .catch(function(error) {
            // alert("There was an error!!")
            console.log(error)
            appendOutput("Unauthorized Access")
        })

}

function appendOutput(output) {
    let domObject = document.querySelector("body")
    let newElement = document.createElement("p")
    newElement.innerText = output
    domObject.appendChild(newElement)
}