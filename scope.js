// Global Scope

var name = "Carvalho"
const PI = 3.1415

    // Block Scope
    {
        let name = "Rafael"
        console.log(name) // this variable can't be accessed from outside because it was declared with let

        const PI = 3.14 // can't be accessed from outside because it was declared with const
    }

// Global
console.log(name)
console.log(PI)

    // Local Scope

    function hello(){
        let person = "Rafa"
        console.log(person)
    }

let person = "Me"
console.log(person)

    function hi(){
        console.log(person)
    }
    hi()

    // console.log(myName)

    // function hey(){
    //     myName = "Rafaelzito"
    // }


    





