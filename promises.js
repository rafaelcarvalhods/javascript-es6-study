import fetch from 'node-fetch' 

const myPromise = new Promise((resolve, reject) => {

    const oneName = "Rafael"

    if(oneName === "Rafael"){
        setTimeout(() => resolve("I got it!"), 2000)
    } else {
        reject("Houston, we've got a problem!")
    }
})

myPromise.then((data) => console.log(data)).catch((err) => console.log(err))

// using Fetch request with Github API

const userName = "rafaelcarvalhods";

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
})

// const list = fetch('/home/rafaelcarvalhods/Desktop/Dev/javascript-es6-study/list.json')
// list.then((item) => console.log(item))

