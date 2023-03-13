// https://edabit.com/challenge/4gzDuDkompAqujpRi
// Add up the Numbers from a Single Number

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300
// Notes
// Expect any positive number between 1 and 1000.

/** solution - for loop */

function addUp1 (num) {
  let sum = 0
  for (let index = 0; index <= num; index++) {
    sum += index
  }

  return sum
}

/** solution - array with reduce  */

function addUp1 (num) {
  // const arr = Array.from(Array(num + 1).keys()).slice(1)
  // console.log(arr)

  // const reduced = Array.from(Array(num + 1).keys())
  //   .slice(1)
  //   .reduce((acc, current) => {
  //     return acc + current
  //   })

  return Array.from(Array(num + 1).keys())
    .slice(1)
    .reduce((acc, current) => {
      return acc + current
    })
}

//test
//addUp(4) ➞ 10
//addUp(13) ➞ 91
//addUp(600) ➞ 180300
