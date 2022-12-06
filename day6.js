const fs = require('fs');

// Parse the input and create a list of ranges
const input = fs.readFileSync('day6input.txt', 'utf8');
//console.log(input)


function findStartOfPacket(str) {
    let numCharsProcessed = 0;
  
    for (let i = 0; i < str.length - 3; i++) {
      let chunk = str.substring(i, i + 4);
      let uniqueChars = new Set(chunk);
  
      if (uniqueChars.size === 4) {
        // We have found four unique characters, so we return the number of characters we have processed
        return numCharsProcessed + 4;
      }
  
      numCharsProcessed++;
    }
  
    // If we reach the end of the string without finding four unique characters, we return 0
    return 0;
  }

  // Part 1
//const str = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
//const result = findStartOfPacket(input);
//console.log(result); // 7


function findStartOfMessage(str, numUniqueChars) {
    let numCharsProcessed = 0;
  
    for (let i = 0; i < str.length - numUniqueChars + 1; i++) {
      let chunk = str.substring(i, i + numUniqueChars);
      let uniqueChars = new Set(chunk);
  
      if (uniqueChars.size === numUniqueChars) {
        // We have found the specified number of unique characters, so we return the index of the first character in the chunk
        return i;
      }
  
      numCharsProcessed++;
    }
  
    // If we reach the end of the string without finding the specified number of unique characters, we return -1
    return -1;
  }


str = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
let result = findStartOfMessage(input,14) + 14
console.log(result)