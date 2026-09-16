let input = document.getElementsByTagName("input")
// console.log(input)

let button = document.getElementsByTagName("button")[0]

button.addEventListener("click", (event)=>{
    event.preventDefault()
    let fname = input[0].value;
    let lname = input[1].value;
    let pwd = input[2].value;
    // console.log(`First name: ${fname}, Last name: ${lname}, Password: ${pwd}`);
    let data = {
        first_name: fname, //or instead of fname just do input[0].value and get rid of line 8
        last_name: lname,
        password: pwd
    }
    console.log(data)
    console.log(JSON.stringify(data))
} )

