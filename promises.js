const myPromise = new Promise((resolve, reject) => {
    
    const name = "Rafael"

    if(name === "Rafael"){
        resolve("User found!")
    } else {
        reject("User not found")
    }
})

myPromise.then((data) => {
    console.log(data)
})

// using Fetch request with Github API

const userName = "rafaelcarvalhods";

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }
}).then((response) => {
    console.log(typeof response)
})

