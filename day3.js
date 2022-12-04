const fs = require('fs'); // import the fs module
const filePath = './day3input.txt'; // specify the path to the file
const fileContents = fs.readFileSync(filePath, 'utf8'); // read the contents of the file
const rucksack = fileContents.split('\n'); // split the contents of the file into an array of rows, using the newline character as the delimiter

let priorities = 0


//sharedLetters(rucksack)


console.log(findUniqueLetters(rucksack))
let badges = findUniqueLetters(rucksack)

for (let i = 0; i < badges.length;i++){
    if (badges[i] != null){
        priorities +=scoreLetter(badges[i])
        console.log(priorities)
    }
}

function findUniqueLetters(strings) {
  const result = [];

  // Loop through the strings three at a time
  for (let i = 0; i < strings.length-2; i += 3) {
    // Get the three strings
    const string1 = strings[i];
    const string2 = strings[i + 1];
    const string3 = strings[i + 2];

    console.log("Strings:", string1, string2, string3);

    // Loop through each character in the first string
    for (let j = 0; j < string1.length; j++) {
      // Loop through each character in the second string
      for (let k = 0; k < string2.length; k++) {
        // Loop through each character in the third string
        for (let l = 0; l < string3.length; l++) {
          // Check if the character at the current position in
          // all three strings is the same
          if (string1[j] === string2[k] && string1[j] === string3[l]) {
            
            // If it is, check if it is already in the result array
            if (string1[j] != result[result.length-1]) {
              // If it is not, add it to the result array
              console.log("Result: " + result[result.length-1])
              result.push(string1[j]);
              console.log("Found matching character:", string1[j]);
            }
            else{
              console.log("Already existed: " + string1[j])
            }
          }
        }
      }
    }
  }

  return result;
}

//Part 1 jank

/*
for (let i = 0; i < rucksack.length;i++){
        str1 = [rucksack[i].slice(0, rucksack[i].length / 2)];
        console.log(str1[0])
        str2 = [rucksack[i].slice(rucksack[i].length / 2)]; 
        console.log(str2[0])
      
        let matchingLetter = findMatchingLetter(str1[0], str2[0])
        priorities += scoreLetter(matchingLetter)
        console.log(priorities)
}
*/



function findSharedLetters(strings) {
    // Create a new empty array to store the shared letters
    const sharedLetters = [];
    
    // Loop through the input array of strings
    for (let i = 0; i < strings.length - 2; i++) {
      // Get the current, next, and next-next strings
      const str1 = strings[i];
      const str2 = strings[i + 1];
      const str3 = strings[i + 2];
      
      // Loop through the letters in the first string
      for (let j = 0; j < str1.length; j++) {
        // Get the current letter
        const letter = str1[j];
        
        // Check if the next and next-next strings both contain the current letter
        if (str2.includes(letter) && str3.includes(letter)) {
          // Add the letter to the shared letters array if it's not already there
          if (!sharedLetters.includes(letter)) {
            sharedLetters.push(letter);
          }
        }
      }
      
      // Loop through the letters in the second string
      for (let j = 0; j < str2.length; j++) {
        // Get the current letter
        const letter = str2[j];
        
        // Check if the first and next-next strings both contain the current letter
        if (str1.includes(letter) && str3.includes(letter)) {
          // Add the letter to the shared letters array if it's not already there
          if (!sharedLetters.includes(letter)) {
            sharedLetters.push(letter);
          }
        }
      }
      
      // Loop through the letters in the third string
      for (let j = 0; j < str3.length; j++) {
        // Get the current letter
        const letter = str3[j];
        
        // Check if the first and next strings both contain the current letter
        if (str1.includes(letter) && str2.includes(letter)) {
          // Add the letter to the shared letters array if it's not already there
          if (!sharedLetters.includes(letter)) {
            sharedLetters.push(letter);
          }
        }
      }
    }
    
    // Return the array of shared letters
    return sharedLetters;
  }



function findMatchingLetter(str1, str2) {
    // Loop through each character in str1
    for (let i = 0; i < str1.length; i++) {
      // For each character, check if it exists in str2
      if (str2.indexOf(str1[i]) !== -1) {
        // If the character exists in str2, return it
        return str1[i];
      }
    }
}


function scoreLetter(str) {
    if (str.length !== 1) {
      throw new Error('Input string must contain exactly one letter.');
    }
  
    const charCode = str.charCodeAt(0);
  
    // Check if the letter is uppercase or lowercase
    if (charCode >= 97 && charCode <= 122) {
      // If the letter is lowercase, return its score as 1-26
      return charCode - 96;
    } else if (charCode >= 65 && charCode <= 90) {
      // If the letter is uppercase, return its score as 27-52
      return charCode - 38;
    } else {
      // If the input is not a letter, return null
      return null;
    }
}