// Async envolves a function in a Promise / makes a function return a Promise

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

// Await makes a function wait for a Promise

const url = 'https://jsonplaceholder.typicode.com/users'

const getPosts = async () => {
  try {
    const response = await axios.get(url)

    console.log(response.data)

  } catch (error) {
    console.log('Gotcha', error)
  }
}

getPosts()


