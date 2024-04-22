/* DESCRIPTION:
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
 */

//SOLUTION
function towerBuilder(nFloors) {
    let tower = [];
    for(let i = 1; i <= nFloors; i++){
      let spaces = nFloors - i;
      let stars = 2 * i - 1;
      tower.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
    }
    return tower;
}