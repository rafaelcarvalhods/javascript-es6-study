console.log(..."Rafa")

// Copy
const user1 = {
    name: "Rafael",
    surname: "Carvalho",
};

const user2 = { name: "Marcia", surname: "Carvalho" };

// console.log(user2);
// console.log(user1);


// Combining
const users =  [ { ...user1, ...user2 } ];
console.log(users)

