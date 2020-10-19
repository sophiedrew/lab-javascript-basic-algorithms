// Iteration 1: Names and Input

console.log("I'm ready!");
const hacker1 = "Sophie";
console.log (`The driver's name is ${hacker1}`)

const hacker2 = "Maxim";
console.log (`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

function checkLength() {
    return hacker1.length > hacker2.length
      ? `The driver has the longest name, it has ${hacker1.length} characters`
      : hacker2.length > hacker1.length
      ? `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
      : `Wow, you both have equally long names, ${hacker1.length} characters!`;
  }
  console.log(checkLength(hacker1, hacker2));


// Iteration 3: Loops

function driversName (name) {
    return name.toUpperCase().split("").join(" ");
  }
  console.log(driversName(hacker1))
  function reverseName (name) {
    let reversed=""
    for (let i = name.length-1; i >= 0; i--) {
      reversed += name[i]
    }
    return reversed;
  }
  console.log(reverseName(hacker2));