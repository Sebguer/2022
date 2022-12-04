const fs = require('fs'); // import the fs module

const filePath = './day2input.txt'; // specify the path to the file

const fileContents = fs.readFileSync(filePath, 'utf8'); // read the contents of the file

const rows = fileContents.split('\n'); // split the contents of the file into an array of rows, using the newline character as the delimiter


const columns = rows.reduce((columns, row) => {
    const values = row.split('\t'); // split the row into an array of columns, using the tab character as the delimiter
    columns[0].push(values[0]); // append the first column to the first array
    columns[1].push(values[1]); // append the second column to the second array
    return columns;
  }, [[], []]); // initialize the columns array with two empty arrays

  console.log(columns[0][0])
  console.log(columns[1][1])