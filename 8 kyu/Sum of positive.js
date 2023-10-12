/* DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */


//SOLUTION
function positiveSum(arr) {
    return arr.filter(pos=> pos > 0 ).reduce((total, num) => total + num, 0);
}
  
// console.log(positiveSum([1,-2,3,4,5]));