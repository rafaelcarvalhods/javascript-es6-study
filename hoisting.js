greeting = "Hi"
console.log(greeting)
var greeting

{
    greetingAgain = "Hi again"
    console.log(greetingAgain)
}

{
    greetingBuddy = "Hi, buddy"
    console.log(greetingBuddy)
    // let greetingBuddy        // hoisted to the top of the block, but not initialized. It will result in an error
}

var x = 2
console.log(x * y)
var y = 3       // JavaScript only hoists declarations, not initializations

var a = 2
b = 3
console.log(a * b)
var b

var c = 2
var d
console.log(c * d)
d = 3