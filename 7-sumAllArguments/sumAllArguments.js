// https://www.youtube.com/watch?v=vomuCMmoNyE - question 2 [25:00]

// Sum all arguments
// Write a function that returns the sum of all arguments passed

// ** solution ** //

// function sum () {
//   const total = Object.values(arguments).reduce((acc, item) => {
//     return acc + item
//   }, 0)

//   return total
// }

// NEWER syntax
function sum (...args) {
  const total = args.reduce((acc, item) => {
    return acc + item
  }, 0)

  return total
}

// tests
// sum(2, 3, 4, 5) -> 14
