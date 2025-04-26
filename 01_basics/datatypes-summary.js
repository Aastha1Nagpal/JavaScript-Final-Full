// Primitive (call by value ke base pe)
//they are call by value (copy mei changes hote h)
// 7 types : String, Number, Boolean, Null, undefined, BigInt, Symbol

const score = false
const scoreValue = 10.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//dikh same raha hai, but return value is different (because unique)
// console.log(id === anotherId);

// const bigNumber = 19827654321723n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

//curly braces ke andar sabkuch h, key value pair ki form mei and you can store it in some variable as well
let myObj = {
    name: "aastha",
    age: 20,
}

const myFunction = function(){
    console.log("Heloo");
}


// console.log(typeof myFunction);
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);


// ++++++++++++++++++++++++++++++++++++++++++++++



//Stack(Primitive)(ek copy milta hai), Heap(Non- Primitive)(isme reference milta hai)

//stack mei hamesha copy milta h, actual change ni aati, copy mei change aata hai

//heap mei jab ho rha h toh refernce mei jaake change hoga which means copy nahi pass hogi, seedha address pe change ho jaega

let myYoutubeName = "aasthanagpal"

let anotherName = myYoutubeName
anotherName = "lolaland"
console.log(myYoutubeName);
console.log(anotherName);

let user = {
    email: "user@google.com",
    upi: "user@okhdfcbank"
}

let user2 = user;

user2.email = "aastha@gmail.com"

console.log(user.email);
console.log(user2.email);

