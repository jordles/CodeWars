/* DESCRIPTION:
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

//SOLUTION
function maps(x){
    //If we are not allowed to use map, we can implement what map does.
    let newArr = [];
    x.forEach(num => newArr.push(num*2)) //we can also use a for loop here and push new values
    return newArr;
}