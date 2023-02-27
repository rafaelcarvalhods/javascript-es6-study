const text = "Rafael"

// Array.from
console.log(Array.from(text))

// Array.of - creates an array from several elements
const array = Array.of(1, 2, "Name", {name: 'Rafael'})
console.log(array)

// array.find - returns the first value that satisfies the function requirements
const list = [5, 3, -1, 0, -5]
console.log(list.find(x => x < 0))

const data = [
    {
        name: "Rafael",
        lastName: "Silva",
        linkedin: "@rafaelcarvalhods"
    },

    {
        name: "Marcia",
        lastName: "Reis",
        linkedin: "@marciareis"
    }
]

console.log(data.find(item => item.name == "Marcia"))

// array.findIndex - returns the index of the first value that satisfies the function requirements
console.log(list.findIndex(x => x < 0))


// Array.fill
const arr = new Array(10)
arr.fill("Name")
console.log(arr)

arr.fill("Rafael", 0, 1)
console.log(arr)

arr.fill("Marcia", 2, 3)
console.log(arr)