/* DESCRIPTION:
For encrypting the strings this region of chars is given (in this order!):

all letters (ascending, first all UpperCase, then all LowerCase)
all digits (ascending)
the both chars: " "(space) and "."
These are 64 chars! (This region is zero-based.)
So, every char from this region has 6 bits!

Write two methods:

function encrypt(text)
function decrypt(encryptedText)
Prechecks:

1. If the input-string (for both methods!) has chars, that are not in the region, 
   throw an Exception(C#, C++, Python) or Error(JavaScript).
2. If the input-string is null or empty return exactly this value!
For building the encrypted string:
For every char use these rules:

1. Change the fifth bit of the char and the first bit of the next char. (C1.5 <==> C2.1, only if there is a next char!)
2. Inverse the second and the forth bit of the char.           (2,4 => 0->1 or 1->0)
3. Change the first 3 bit against the last 3 bit of the char.  (1,2,3 <==> 4,5,6)
4. Change every odd bit against the following bit of the char. (1 <==> 2, 3 <==> 4, 5 <==> 6)
5. Reverse the whole line of bits of the char.
6. Change the first against the third bit of the char.         (1 <==> 3)
Of course every rule takes the changed char from the previous rule.
The position of a bit starts from the beginning and not from the end! (So maybe in different order as you thought! See the example.)

Example for the first rule for "B9":

pos: 1 2 3 4 5 6 
B -> 0 0 0 0 0 1
9 -> 1 1 1 1 0 1
Change pos 5 from "B" against pos 1 from "9".
 ->  0 0 0 0 1 1 
 ->  0 1 1 1 0 1 
 */

 //SOLUTION (very hard, but i got through it finally...)

 const [encrypt, decrypt] = (function () {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const uniqueChars = ' .';
    const region = alphabet.toUpperCase() + alphabet + digits + uniqueChars;
  
    
    function charToBits(char){
      //return char.charCodeAt(0).toString(2); wrong for this assignment
      //The following instructions is not asking to convert ASCII code to bit. 
      //Its from the initial position in the region. So convert the index of your char found on region to bits. 
      return region.indexOf(char).toString(2).padStart(6, '0').split('');
    }
    
    function bitsToChar(bits) {
      return region[parseInt(bits, 2)];
    }
  
    const r1 = function(char, nextChar){
      if(nextChar){
        [char[4], nextChar[0]] = [nextChar[0], char[4]];
      }
      console.log('step1', char);
      return char;
    }
    
    const der1 = function(char, prevChar) {
      if (prevChar) {
        let temp = char[4];
        char[4] = prevChar[0];
        prevChar[0] = temp;
      }
      return { char, prevChar };
    }
    
    const r2 = function(char){
      const invertBit = bit => bit === '0' ? '1' : '0';
      char[1] = invertBit(char[1]);
      char[3] = invertBit(char[3]);
      console.log('step2', char);
      return char;
    }
    
    const r3 = function(char){
      char = [...char.slice(3, 6), ...char.slice(0, 3)];
      console.log('step3', char);
      return char;
    }
  
    const r4 = function(char){
      char = char.map((bit, index, arr) => index % 2 === 0 ? arr[index + 1] ? arr[index + 1] : bit : arr[index - 1]);
      console.log('step4', char);
      return char;
    }
    
    const r5 = function(char){
      char = char.reverse();
      console.log('step5', char);
      return char;
    }
    
    const r6 = function(char){
      [char[0], char[2]] = [char[2], char[0]];
      console.log('step6', char);
      return char;
    }
  
    return[
      //encryption
      function(text){
        //prechecks 
        if (!text) return text;
        if ([...text].some(char => !region.includes(char))) throw new Error('Input contains invalid characters');
        
        let bits = [...text].map(charToBits);
        bits = bits.map((char, index, arr) => {
          return r6(r5(r4(r3(r2(r1(char, arr[index+1])))))).join('');
        });
        let chars = bits.map(bitsToChar);
        return chars.join('');
      },
      //decryption
      function(text){
        //prechecks 
        if (!text) return text;
        if ([...text].some(char => !region.includes(char))) throw new Error('Input contains invalid characters');
            
        let bits = [...text].map(charToBits).reverse();
        //couldnt get map to work, couldnt maintain state of prevChar between iterations
        for (let i = 0; i < bits.length; i++) {
          let { char, prevChar } = der1(r2(r3(r4(r5(r6(bits[i]))))), bits[i - 1] ? bits[i - 1].split('') : bits[i - 1]);
          bits[i] = char.join('');
          if (prevChar) {
            bits[i - 1] = prevChar.join(''); //update our prevChar
          }
        }
        let chars = bits.reverse().map(bitsToChar);
        return chars.join('');
      }
    ];
  })();