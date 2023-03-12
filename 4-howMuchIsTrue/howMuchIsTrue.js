// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

/** solution */

function countTrue (arr) {
  const count = arr.reduce((total, item) => {
    //** if else solution **//
    // if (item === true) {
    //   total++
    // }
    // return total

    //** ternary operator solution **//
    return total + (item === true ? 1 : 0)
  }, 0)
  console.log(count)
  return count
}

// tests
// countTrue([true, false, false, true, false])
// countTrue([false, false, false, false])
// countTrue([])
