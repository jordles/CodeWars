/* DESCRIPTION:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

//SOLUTION

function findOdd(A) {
    let count = {};
    
    // Count the occurrences of each number in the array
    for (let num of A) {
      count[num] = (count[num] || 0) + 1; //if count[num] exists we use the count[num] value, else we initialize it with 0
    }
    
    // Find the number with an odd count
    for (let key in count) {
      if (count[key] % 2 !== 0) {
        return parseInt(key); // because object keys are returned as string, convert key to integer before returning, 
      }
    }
}

//an elegant solution by other users: for study purposes**
/* const findOdd = (xs) => xs.reduce((a, b) => a ^ b); */ //uses XOR operator 
//XORing all the elements in the array, the elements that appear an even number of times will effectively cancel each other out (result in 0), and the element that appears an odd number of times will be the final result.

