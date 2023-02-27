const text = "Rafael"

// Array.from
console.log(Array.from(text))

// Array.of - creates an array from several elements
const array = Array.of(1, 2, "Name", {name: 'Rafael'})
console.log(array)

// array.find - returns the first value that satisfies the function requirements
const list = [5, 3, -1, 0, -5]
console.log(list.find(x => x < 0))

// array.findIndex - returns the index of the first value that satisfies the function requirements
console.log(list.findIndex(x => x < 0))


// Array.fill
