//consume an API
//They decide endpoint
//They decide the data
//they decide how much data to send
// they decide the data structure

// https://dog.ceo/api/breeds/image/random
const BASEURL = "https://dog.ceo/api/breeds"

let btn = document.querySelector("button")
let img = document.querySelector("img")

img.setAttribute("src","https://images.dog.ceo/breeds/australian-shepherd/pepper2.jpg")

// console.log(btn)
btn.addEventListener("click", () =>{
    let route = "/image/random"
    let endpoint = `${BASEURL}${route}`
    fetch(endpoint).
        then((data)=>{
            // console.log("Data: ", data)
            if(data.ok === true){ //if endpoint is good
                //parse the data
                let result = data.json()
                // console.log("Result: ", result)
                return result // allow the rest of the function to use this data
            } else {
                throw new Error("It's broken ts..");
            }
        }).
        then(parsedData=>{ // the returned result from the fetch
            // console.log("Parsed data", parsedData.message)
            img.setAttribute("src",parsedData.message)
    }).
        catch((err) => {console.error("Error message: ", err)
        })
})



// we want to run code that CONSUMES (fetches) an API that sends us a random image

// HTTP request
// 1) utilize an endpoint
// 2) receive data - if good, parse
//                 - if bad , send error
// 3) do something with the PARSED
// 4) error handling


// fetch(endpoint)
// .then(data)
// .then(result)
// .catch(err)