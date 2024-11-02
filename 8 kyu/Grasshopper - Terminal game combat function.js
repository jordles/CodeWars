// Description:
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// SOLUTION
const combat = (health, damage) => (health - damage) < 0 ? 0 : health - damage