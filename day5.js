let stack1 = ['F','C','J','P','H','T','W']
let stack2 = ['G', 'R', 'V', 'F', 'Z', 'J','B','H']
let stack3 = ['H','P','T','R']
let stack4 = ['Z','S','N','P','H','T']
let stack5 = ['N','V','F','Z','H','J','C','D']
let stack6 = ['P','M','G','F','W','D','Z']
let stack7 = ['M','V','Z','W','S','J','D','P']
let stack8 = ['N','D','S']
let stack9 = ['D','Z','S','F','M']


/* Test stacks
let stack1 = ['Z','N']
let stack2 = ['M','C','D']
let stack3 = ['P']
*/


let howMany = 0
let from = 0
let to = 0

const fs = require('fs');
const input = fs.readFileSync('day5input.txt', 'utf8');
const inputLines = input.split('\n');

// Version 1: Use the let keyword to declare the variables
inputLines.forEach(line => {
    
    // Use a regular expression to match the "move", "from", and "to" values
    const match = line.match(/move (\d{1,2}) from (\d{1,2}) to (\d{1,2})/);

    // Check if the match is an array
    if (Array.isArray(match)) {
      // Use array destructuring to assign the values to the variables
      let [, move, from, to] = match;
  
      // Convert the values to numbers using the Number() function
      howMany = Number(move);
      from = Number(from);
      to = Number(to);
  
      // Use the values here...
      let fromStack = getStack(from)
      let toStack = getStack(to)
      console.log (line)
      console.log(howMany + " " + fromStack + " " + toStack)
      moveItems(howMany, fromStack, toStack)

    }
  });
  // Test output
  //console.log([1, 2, 3].map(i => eval(`stack${i}[stack${i}.length - 1]`)).join(", "));
  
  // Real output
  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => eval(`stack${i}[stack${i}.length - 1]`)).join(", "));

  function moveItems(howMany, fromStack, toStack) {
    // Check if howMany is a positive integer
    if (typeof howMany !== "number" || howMany < 1 || howMany % 1 !== 0) {
      throw new Error("The first input must be a positive integer.");
    }
  
    // Convert fromStack and toStack from strings to references to the actual arrays
    fromStack = eval(fromStack);
    toStack = eval(toStack);
  
    // Check if fromStack and toStack are arrays
    if (!Array.isArray(fromStack) || !Array.isArray(toStack)) {
      throw new Error("The next two inputs must be arrays.");
    }
  
    // Check if there are enough items in fromStack
    if (fromStack.length < howMany) {
      throw new Error("There are not enough items in the fromStack array.");
    }

    // Move the items from fromStack to toStack
    let elements = fromStack.splice(-howMany, howMany);
    toStack.push(...elements);
    console.log(elements + " moved to " + toStack + " from " + fromStack)
  }


  /* Part one function
  function moveItems(howMany, fromStack, toStack) {
    // Check if howMany is a positive integer
    if (typeof howMany !== "number" || howMany < 1 || howMany % 1 !== 0) {
      throw new Error("The first input must be a positive integer.");
    }
  
    // Convert fromStack and toStack from strings to references to the actual arrays
    fromStack = eval(fromStack);
    toStack = eval(toStack);
  
    // Check if fromStack and toStack are arrays
    if (!Array.isArray(fromStack) || !Array.isArray(toStack)) {
      throw new Error("The next two inputs must be arrays.");
    }
  
    // Check if there are enough items in fromStack
    if (fromStack.length < howMany) {
      throw new Error("There are not enough items in the fromStack array.");
    }

    // Move the items from fromStack to toStack
    for (let i = 0; i < howMany; i++) {
        let element = fromStack.pop();
        toStack.push(element);
        console.log(element + " moved to " + toStack + " from " + fromStack)
    }
  }
  
  */

function moveCrates(howMany, from, to){
    let fromStack = getStack(from)
    let toStack = getStack(to)
    moveObjects(howMany, fromStack, toStack)
}



function getStack(num) {
    let stack = '';
  
    switch (num) {
      case 1:
        stack = 'stack1';
        break;
      case 2:
        stack = 'stack2';
        break;
      case 3:
        stack = 'stack3';
        break;
      case 4:
        stack = 'stack4';
        break;
      case 5:
        stack = 'stack5';
        break;
      case 6:
        stack = 'stack6';
        break;
      case 7:
        stack = 'stack7';
        break;
      case 8:
        stack = 'stack8';
        break;
      case 9:
        stack = 'stack9';
        break;
      default:
        stack = 'Invalid number';
    }
  
    return stack;
  }
