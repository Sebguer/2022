//Day 4, part 1

const fs = require('fs');

// Parse the input and create a list of ranges
const input = fs.readFileSync('day4input.txt', 'utf8');
const inputLines = input.split('\n');
const ranges = [];
for (const line of inputLines) {
    const [pair1, pair2] = line.split(',');
    const [start1, end1] = pair1.split('-');
    const [start2, end2] = pair2.split('-');
    ranges.push([parseInt(start1, 10), parseInt(end1, 10)]);
    ranges.push([parseInt(start2, 10), parseInt(end2, 10)]);
}

// Count the number of lines where one range fully overlaps the other
let numOverlappingLines = 0;
for (let i = 0; i < ranges.length - 1; i += 2) { // Stop iterating when i reaches the last element
    const [a, b] = ranges[i];
    const [c, d] = ranges[i + 1];

    // Check if range A fully overlaps range B or vice versa
    if ((a <= c && b >= d) || (c <= a && d >= b)) {
        numOverlappingLines += 1;
    }
}

// Print the result
console.log(numOverlappingLines);

