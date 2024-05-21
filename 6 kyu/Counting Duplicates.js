/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

//SOLUTION

function duplicateCount(text){
    // Use reduce to accumulate counts of each character
    let charCounts = text.toLowerCase().split('').reduce((acc, alphanum) => {
      // Increment the count for the current character
      acc[alphanum] = (acc[alphanum] || 0) + 1; //setting values for our properties of our object
      return acc;
    }, {});
  
    // Filter the accumulated counts to find characters that appear more than once
    let duplicates = Object.keys(charCounts).filter(key => charCounts[key] > 1);
  
    // Return the count of duplicates
    return duplicates.length;
  }