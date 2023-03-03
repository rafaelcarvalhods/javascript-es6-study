const data = {
    name: "Rafael",
    surname: "Carvalho da Silva",
    email: "rafaelcarvalho.rl@gmail.com",
    social: {
        linkedin: "https://www.linkedin.com/in/rafaelcarvalhods/",
        github: "https://github.com/rafaelcarvalhods",
        twitter: ''
    }
}

const {name, surname} = data
console.log(`${name} ${surname}`)

//____________________________________________

const arr = [1, 2, 3, 4, 5]

const [a, b, ...c] = arr
console.log(`
a: ${a} b: ${b} c: ${c}`)

let x = 1;
let y = 2;
[x, y] = [y, x]
console.log(`x: ${x} y: ${y}`)

//____________________________________________

const returnNames = () => ["Rafa", "Marcia"];
const [name1, name2] = returnNames()
console.log(`${name1} & ${name2}!`)

