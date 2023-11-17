/* DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

//SOLUTION

function solution(string) {
    let regex= /([A-Z])/g
    return string.replace(regex,' $1')
 }