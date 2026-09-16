
let teamLeader = document.getElementById("teamLeader")
console.log("Xmen: ", teamLeader)

let mutants = document.getElementsByClassName("mutant")
console.log(mutants)
console.log(mutants[1])

let allXmen = document.getElementsByTagName("li")
console.log(allXmen)

let selectedXmen = document.querySelector(".mutant")
console.log(selectedXmen)

let allTeams = document.querySelectorAll("h1")
console.log(allTeams)
allTeams[0].style.color = "red"
allTeams[0].style.border = "green 3px solid"
allTeams[0].style.fontSize = "48px"

allTeams[1].textContent = "New Mutants" //changes text

const header = document.querySelector("h1")
header.addEventListener("click", (event)=>{
    console.log("you clicked the h1.");
    //set new content
    header.textContent = "Avengers Assemble";
})


