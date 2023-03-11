// https://edabit.com/challenge/4gzDuDkompAqujpRi
// Add up the Numbers from a Single Number

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300
// Notes
// Expect any positive number between 1 and 1000.

/** solution */

function addUp (num) {
  let sum = 0
  for (let index = 0; index <= num; index++) {
    sum += index
  }

  return sum
}

//test
//addUp(4) ➞ 10
//addUp(13) ➞ 91
//addUp(600) ➞ 180300
