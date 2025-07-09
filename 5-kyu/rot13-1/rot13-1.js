function rot13(message) {
  return message.split('').map(char => {
    const code = char.charCodeAt(0);
​
    if (code >= 65 && code <= 90) {
      // Uppercase A-Z
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }
    if (code >= 97 && code <= 122) {
      // Lowercase a-z
      return String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    return char; // Non-letter
  }).join('');
}
​
//initial; bad performance
// function rot13(message){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   //your code here
//   return message.split('').map( char => {
//     if(/[^A-Za-z]/.test(char)) return char;
//     const isUpper = char >= 'A' && char <= 'Z';
//     let index = alphabet.indexOf(char.toLowerCase());
//     let finalChar = alphabet[(index + 13) % 26];
//     return isUpper ? finalChar.toUpperCase() : finalChar;
//   }).join('');
// }