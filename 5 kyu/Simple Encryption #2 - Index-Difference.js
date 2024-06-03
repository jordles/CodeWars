/* DESCRIPTION:
For encrypting strings this region of chars is given (in this order!):

all letters (ascending, first all UpperCase, then all LowerCase)
all digits (ascending)
the following chars: .,:;-?! '()$%&"
These are 77 chars! (This region is zero-based.)

Write two methods:

function encrypt(text)
function decrypt(encryptedText)
Prechecks:

If the input-string has chars, that are not in the region, throw an Exception(C#, Python) or Error(JavaScript).
If the input-string is null or empty return exactly this value!
For building the encrypted string:

For every second char do a switch of the case.
For every char take the index from the region. Take the difference from the region-index of the char before (from the input text! Not from the fresh encrypted char before!). (Char2 = Char1-Char2)
Replace the original char by the char of the difference-value from the region. In this step the first letter of the text is unchanged.
Replace the first char by the mirror in the given region. ('A' -> '"', 'B' -> '&', ...)
Simple example:

Input: "Business"
Step 1: "BUsInEsS"
Step 2: "B61kujla"
B -> U
B (1) - U (20) = -19
-19 + 77 = 58
Region[58] = "6"
U -> s
U (20) - s (44) = -24
-24 + 77 = 53
Region[53] = "1"
Step 3: "&61kujla" */

//SOLUTION

function encrypt(text) {
    const region = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! \'()$%&"';
    if (!text) return text;
    if ([...text].some(char => !region.includes(char))) throw new Error('Input contains invalid characters');
    
    //step 1 switch case for 2nd chars
    const step_1 = text.split('').map((char, index)=> {
      if (index % 2 !== 0) { //checking every odd index
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      }
      return char;
    })
  
    //step 2 find the diff
    const step_2 = step_1.map((char, index, arr) => {
      if(index === 0) return char; //ignore the first char
      const previousCharIndex = region.indexOf([arr[index-1]]);
      const currentCharIndex = region.indexOf(char);
      let diff = (previousCharIndex - currentCharIndex + region.length) % region.length;
      return region[diff];
    })
  
    //step 3 mirror our first char
    const mirroredFirstChar = region[region.length - 1 - region.indexOf(step_2[0])];
    step_2[0] = mirroredFirstChar;
    const step_3 = step_2;
    return step_3.join('');
    
}
  
function decrypt(encryptedText) {
    const region = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! \'()$%&"';
    if (!encryptedText) return encryptedText;
    if ([...encryptedText].some(char => !region.includes(char))) throw new Error('Input contains invalid characters');

    //step 1 mirror first char
    let step_1 = encryptedText.split('');
    const mirroredFirstChar = region[region.length - 1 - region.indexOf(step_1[0])];
    step_1[0] = mirroredFirstChar;
    console.log(step_1);

    //step 2 undo the diffs
    let x = step_1[0]; //grab the initial 
    const step_2 = step_1.map((char, index, arr) => {
        if(index === 0) return char; //ignore the first char
        
        //reverse what we did so (x - y + 77) % 77 = char => -y = (char - x - 77) % 77; firstChar is unchanged so that is x. 
        //for future iterations x must be the previous x so we can backtrack the logic, so we update our x
        x = region[(region.indexOf(char) - region.indexOf(x) - region.length) * -1 % region.length];
        return x;
    });
    console.log(step_2);

    //step 3 revert all 2nd chars to opposite switch case
    const step_3 = step_2.map((char, index) => {
        if(index % 2 !== 0){
        console.log(char);
        if(char == char.toUpperCase()){
            return char.toLowerCase();
        }
        else{
            return char.toUpperCase();
        }
        }
        return char;
    })
    return step_3.join('');
}
