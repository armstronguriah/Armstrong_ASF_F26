const BASEURL = "https://swapi.dev/api"
let route = "/people"
let endpoint = BASEURL+route; //concatenation
let container = document.getElementById("display_container")

fetch(endpoint)
    .then(response=>{
        // console.log("Response: ", response)
        if(response.ok){
            return response.json()
        }
    })
    .then(parsedData=>{
        for(let i= 0; i < parsedData["results"].length; i++){
            container.innerHTML += `
                <h1>${parsedData["results"][i]["name"]}</h1>
                <p>${parsedData["results"][i]["hair_color"]}</p>
            `
        }
    })
    .catch(err=>console.error(err))

