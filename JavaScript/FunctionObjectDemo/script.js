// let person = {
// //     keys and values, name value pairs
//     fname: "Uriah",
//     last_name: "Armstrong",
//     age: 26,
//     isMarried: true,
//     hobbies: ["workout","travel"],
//     otherObjects:{
//         likesRunning: false,
//         likesRelaxing: "yes"
//     },
//     1: "Test"
// }
//
// // //dot notation
// // console.log(person.age)
// // console.log(person.isMarried)
// // //person object and the hobbies array with index 1
// // console.log(person.hobbies[1])
// // //person object and the otherObjects object value
// // console.log(person.otherObjects.likesRelaxing)
// //
// // //bracket notation
// // console.log(person["last_name"])
// // console.log(person["hobbies"])
// // console.log(person["hobbies"][1])
// // console.log(person["otherObjects"]["likesRelaxing"])
//
// let age = "age"
// let num= 85
// person[age] = num
//
// console.log(person.age)


//===============================================
// //variable names and values can be the same when creating objects
// let age = 26
// let f_name = "Uriah"
// let married= true
//
// let person= {
//     age,
//     f_name,
//     married,
//     dateCreated: new Date()
// }
//
// console.log(person)

//==================================================

// // IIFE - immediately invoked function expression
// (function() {
//     console.log("my first function")
// })()
//
// //function named test
// function test() {
//     console.log("my first function")
// }
// //invoke function
// test()
//
// // function expression
// let testFunction = function(){
//     console.log("testFunction output")
// }
// testFunction()
//
// //parameters - accept values
// //parameters - pass values
// // let newPerson = function(name, age){
// //     console.log("Hello " + name + " you are " + age + " years old")
// // }
//
// //template literals use back tics ``` (under ESC key)
// let newPerson = function(name, age = 21){
//     console.log(`Hello ${name} you are ${age} years old!`)
// }
//
// newPerson("Uriah")
// newPerson(undefined,35)

//===================================================
// // basic fat arrow function
// // let testFunction = () => {
// //     return "testFunction output"
//
// // implied return
// let testFunction = (animal,age) => `${animal} function ${age}`
// let result = testFunction("dog", 12)
//
// // if only one parameter, you don't need to put it in quotes
// let date = info => new Date() + info
// let newResult = date("hello");
//
// console.log(newResult)
// console.log(result)

//=====================================================
let numbers = [1,2,3,4,5]

//predicate is a fancy word for variable used to reference an element in an array
//for-each does not change the original array
numbers.forEach(function(element)
    {console.log(element*2)}
)

numbers.forEach(
    element => console.log(element*3)
)

let names = ["Uriah", "Bob", "Timmy"]
names.forEach(el=> console.log(el + "s"))

//.map() iterates through array and creates NEW array

let pluralNames = names.map(el=>`${el}'s`)
console.log(pluralNames)