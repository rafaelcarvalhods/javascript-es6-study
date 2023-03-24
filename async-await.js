// Async envolves a function in a Promise

const isNumber = value => typeof(value) === 'number'

async function add(firstNumber, secondNumber){

  if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number'){
    throw "Both values need to be a number!"
  }

  return firstNumber + secondNumber

}


// function add(firstNumber, secondNumber){
//   return new Promise((resolve, reject) => {
//     if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number'){
//       reject("Both values need to be a number!")
//     } else {

//       resolve(firstNumber + secondNumber)
//     }

        
//   })
// }