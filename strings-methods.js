let text = "JavaScript is a great programming language!"

// Check if 'text' string starts with 'JavaScript'
if(text.startsWith("JacaScript")){
    console.log("The string begins with the word 'JavaScript'.")
} else {
    console.log("The word wasn't found.")
}


// Check if 'text' string ends with '!'
console.log(text.endsWith("!"))

// Check if the string contains the word 'programming'
console.log(text.includes("programming"))


//Use this method to repeat a string as many times as you want
console.log("Ha".repeat(10))


// Review

const str = "King of my heart!"

console.log(str.startsWith("King"))
console.log(str.endsWith("heart"))
console.log(str.includes("my"))
console.log("You are!".repeat(7))

