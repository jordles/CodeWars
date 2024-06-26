/* DESCRIPTION:
You have to write two methods to encrypt and decrypt strings. Both methods have two parameters:

1. The string to encrypt/decrypt
2. The Qwerty-Encryption-Key (000-999) 
The rules are very easy:

The crypting-regions are these 3 lines from your keyboard:
1. "qwertyuiop"
2. "asdfghjkl"
3. "zxcvbnm,."

If a char of the string is not in any of these regions, take the char direct in the output.
If a char of the string is in one of these regions: Move it by the part of the key in the 
region and take this char at the position from the region. 
If the movement is over the length of the region, continue at the beginning.
The encrypted char must have the same case like the decrypted char! 
So for upperCase-chars the regions are the same, but with pressed "SHIFT"!

The Encryption-Key is an integer number from 000 to 999. E.g.: 127

The first digit of the key (e.g. 1) is the movement for the first line.
The second digit of the key (e.g. 2) is the movement for the second line.
The third digit of the key (e.g. 7) is the movement for the third line.

(Consider that the key is an integer! When you got a 0 this would mean 000. A 1 would mean 001. And so on.)
You do not need to do any prechecks. The strings will always be not null and will always have a length > 0. You do not have to throw any exceptions.

An Example:

Encrypt "Ball" with key 134
1. "B" is in the third region line. Move per 4 places in the region. -> ">" (Also "upperCase"!)
2. "a" is in the second region line. Move per 3 places in the region. -> "f"
3. "l" is in the second region line. Move per 3 places in the region. -> "d"
4. "l" is in the second region line. Move per 3 places in the region. -> "d"
--> Output would be ">fdd"
Hint: Don't forget: The regions are from an US-Keyboard!
In doubt google for "US Keyboard." */

//SOLUTION
const [encrypt, decrypt] = (function(){
    const regions = ["qwertyuiop", "asdfghjkl", "zxcvbnm,."];
    const upperRegions = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM<>"];
  
    function isUpperCase(char){
      return upperRegions.some(region => region.includes(char)); 
      //check if the following char exists in our upperRegions.
    }
    
    function shiftChar(char, numberOfShifts, regionIndex, isEncrypting){
      const currentRegion = isUpperCase(char) ? upperRegions[regionIndex] : regions[regionIndex];
      const charIndex = currentRegion.indexOf(char);
      const shiftValue = isEncrypting ? numberOfShifts : -numberOfShifts; //determines whether we are encrypting or decrypting
      const newIndex = (charIndex + shiftValue + currentRegion.length) % currentRegion.length;
      return currentRegion[newIndex];
    }
    
    function processText(text, key, isEncrypting){
      const keys = key.toString().padStart(3, '0').split('').map(Number);
      return [...text].map(char => {
          const regionIndex = isUpperCase(char) ? 
            upperRegions.findIndex(region => region.includes(char)) :
            regions.findIndex(region => region.includes(char));
          if(regionIndex == -1) return char;
          const numberOfShifts = keys[regionIndex];
          return shiftChar(char, numberOfShifts, regionIndex, isEncrypting)
      }).join('');
    }
    
    return [
      function(text, key){
        return processText(text, key, true);
      },
      function(text, key){
        return processText(text, key, false);
      }
    ];
  })();


  //TESTING
    //place in shiftChar function
        /* 
        console.log('charIndex', charIndex);
        console.log('newIndex', newIndex);
        console.log('crypted value', currentRegion[newIndex]);
        console.log('\n'); 
        */
    //place in processText function
        /* 
        console.log('--------------------------');
        console.log('keys', keys);
        console.log('text', [...text]);
        console.log('--------------------------');
        console.log('\n'); 
        */
        //place in the mapping function
            /* 
            console.log('char', char);
            console.log('regionIndex', regionIndex);
            console.log('numberOfShifts', numberOfShifts); 
            */
