/* DESCRIPTION:
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

//SOLUTION
function incrementString (string) {
    // Regular expression to match the trailing number
      const match = string.match(/(\d+)$/);
      console.log('match', match);
      if (match) {
          const number = match[0]; // Extract the number part
          const incrementedNumber = (Number(number) + 1).toString(); // Increment the number
          // Preserve leading zeros by padding the incremented number
          const paddedNumber = number.slice(0, -incrementedNumber.length) + incrementedNumber;
          // Return the original string without the number part plus the incremented number
          return string.slice(0, -number.length) + paddedNumber;
      } else {
          // If there's no trailing number, append '1' to the string
          return string + '1';
      }
  }