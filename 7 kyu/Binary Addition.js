/* DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */

//SOLUTION

//toString
function addBinary(a,b){
    return (a+b).toString(2);
}
  
  /*
  //MOD version
  function addBinary(a,b) {
    let total = a+b
    let binary = ''
    //let arr = []
    
    while(total > 0){
      //since binary is just powers of 2 we can use mod 2 to find out the remainder,
      //We can also use mod by powers of 2 as our counter instead of dividing the total, where a remainder of 2 would mean 1 in binary.
      
      //arr.unshift(total % 2)
      binary += total%2
      total = Math.floor(total / 2) //floor because we would be dealing with decimals.
    }
    
    //return arr.join('');
    return binary;
  }
  */