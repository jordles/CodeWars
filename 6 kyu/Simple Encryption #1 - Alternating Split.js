/* DESCRIPTION:
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes. */

//SOLUTION

function encrypt(text, n) {
    if(!text) return text;
    let arr = text.split('');
    for(let i = 0; i < n; i ++){
    const odds = arr.filter((_, index) => index % 2 !== 0);
    const evens = arr.filter((_, index) => index % 2 == 0);
      arr = odds.concat(evens);
    }
    
    return arr.join('');
  }
  
  function decrypt(encryptedText, n) {
    if(!encryptedText) return encryptedText;
    let arr = encryptedText.split('');
    const length = encryptedText.length;
    
    for (let i = 0; i < n; i++) {
      const evens = arr.slice(0, length / 2);
      const odds = arr.slice(length / 2);
      const result = [];
      
      for (let j = 0; j < length / 2; j++) {
        result.push(odds[j], evens[j]);
      }
      arr = result;
    }
    return arr.join('');
  }