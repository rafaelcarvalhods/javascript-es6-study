// const text = "Rafael"

// // Array.from
// console.log(Array.from(text))

// // Array.of - creates an array from several elements
// const array = Array.of(1, 2, "Name", {name: 'Rafael'})
// console.log(array)

// // array.find - returns the first value that satisfies the function requirements
// const list = [5, 3, -1, 0, -5]
// console.log(list.find(x => x < 0))

// const data = [
//     {
//         name: "Rafael",
//         lastName: "Silva",
//         linkedin: "@rafaelcarvalhods"
//     },

//     {
//         name: "Marcia",
//         lastName: "Reis",
//         linkedin: "@marciareis"
//     }
// ]

// console.log(data.find(item => item.name == "Marcia"))

// // array.findIndex - returns the index of the first value that satisfies the function requirements
// console.log(list.findIndex(x => x < 0))


// // Array.fill
// const arr = new Array(10)
// arr.fill("Name")
// console.log(arr)

// arr.fill("Rafael", 0, 1)
// console.log(arr)

// arr.fill("Marcia", 2, 3)
// console.log(arr)

// Review

const test = Array.from("What is impossible?")
console.log(test)

const mixedList = Array.of(3, 4, "My name", {date: "27/02/2023"})
console.log(mixedList)

const newList = [3, 4, 7, -2, -1, -5]
let item = newList.find(x => x < 0)
console.log(item)
console.log(newList.findIndex(x => x < 0))

const newArr = new Array(7)
newArr.fill("Name", 0, 4)
newArr.fill("Last Name", 4, 7)
console.log(newArr)