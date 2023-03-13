// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
// Matchstick Houses
// This challenge will help you interpret mathematical relationships both algebraically and geometrically.

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436

// Notes

// Step 0 returns 0 matchsticks.
// The input (step) will always be a non-negative integer.
// Think of the input (step) as the total number of houses that have been connected together.

/** solution */

// 1 house = 6sticks
// 2 houses = 6sticks + 5sticks
// 3 houses = 6sticks + 5sticks + 5sticks

function matchHouses (step) {
  const house = 6
  const additionalHouses = 5

  const calcHouse = +!!step * house
  const calcAdditionalHouses = step > 1 && additionalHouses * (step - 1)

  return calcHouse + calcAdditionalHouses
}

// tests
// matchHouses(1)
// matchHouses(4)
// matchHouses(87)
// matchHouses(0)
