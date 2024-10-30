// var example
var x = 100;
if (true) {
    var x = 200; // Same variable!
}
console.log(x); // Outputs: 200

// let example
let y = 100;
if (true) {
    let y = 200; // Different variable
}
console.log(y); // Outputs: 100

// const example
const z = 100;
// z = 200; // Error: Assignment to constant variable.
console.log(z); // Outputs: 100

let greeting = "Hello, world!";
let response = `The time is ${new Date().getHours()}`;
console.log(response)

let isAvailable = true;
let isoverAge = (age > 18);

const age = 17
if(age > 18) {
  console.log("You are of age")
} 
else if (age < 17)
    {
      console.log(`You are not of age. You gotta wait ${18-age} years.`);
    }
else (age == 17)
    {
      console.log(`You are not of age. You gotta wait 1 year.`);
    }

let person = {
  name: "John",
  age: 30,
  isStudent: false
};

console.log(person["age"]);

console.log(typeof(person.isStudent));

alert("Urgent: This is not an important message. ");


// Strict equality: first checks if the types are the same, then checks if the content is equal.
console.log(3 === '3'); // F

console.log(3 == '3'); //T