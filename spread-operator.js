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
const users =  { ...user1, ...user2 }; // Doesn`t work because both objects have the same keys. So only the last one remains
console.log(users)

const social = { linkedin: "likedin.com" }
const currentUser = { ...user1, ...social }
console.log(currentUser)

