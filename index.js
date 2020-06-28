// const { object } = require("chai-spies");

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json",
//         "Accept" : "application/json"
//     },
//     body: JSON.stringify({
//         name: name,
//         email: email,
//     })
// }

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {

        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
     .then(function(response) {
         return response.json();
     })
     .then(function(object){
         document.body.innerHTML = object["id"]
     })
     .catch(function(error){
        document.body.innerHTML = error.message
     })
}



function showId(json) {
    let li = document.createElement('li')
    json.forEach(key => {
        li.innerHTML = key[id]
        document.body.append(li)
        return li;
    })
}

// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });