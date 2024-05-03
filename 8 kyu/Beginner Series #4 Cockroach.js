/* DESCRIPTION:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */

//SOLUTION
function cockroachSpeed(s) {
    // km/hr * hr/60min * min/60sec * 100000cm/km
    return Math.floor(s*(100000/3600));
}