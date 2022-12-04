// Day 4 part 2

const fs = require('fs');

// Parse the input and create a list of ranges
const input = fs.readFileSync('day4input.txt', 'utf8');
const inputLines = input.split('\n');
const ranges = [];
for (const line of inputLines) {
    const [range1, range2] = line.split(',');
    const [start1, end1] = range1.split('-');
    const [start2, end2] = range2.split('-');
    ranges.push([parseInt(start1, 10), parseInt(end1, 10)]);
    ranges.push([parseInt(start2, 10), parseInt(end2, 10)]);
}

// Count the number of pairs where the ranges overlap at all
let numOverlappingPairs = 0;
for (let i = 0; i < ranges.length; i += 2) {
    const [a, b] = ranges[i];
    const [c, d] = ranges[i + 1];



    if ((a >= c && a <= d) || (b >= c && b <= d) || (c >= a && c <= b) || (d >= a && d <= b)) {
        console.log("Overlap on Ranges: " + ranges[i] + " and " + ranges[i+1])
        numOverlappingPairs += 1;
    }
    else{
        console.log("No overlap on Ranges: " + ranges[i] + " and " + ranges[i+1])
    }
}

// Print the result
console.log(numOverlappingPairs);

