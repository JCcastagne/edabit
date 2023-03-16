// https://edabit.com/challenge/hzxN9bAebBPNqdQto

// A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.

// Notes
// Your function should return a function, not a string.

// ** solution ** //

function redundant (str) {
  return () => {
    return str
  }
}

// tests
// const f1 = redundant('apple')
// const f2 = redundant('pear')
// const f3 = redundant('')
