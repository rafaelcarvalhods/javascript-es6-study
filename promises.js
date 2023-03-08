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

