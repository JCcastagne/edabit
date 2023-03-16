// https://www.youtube.com/watch?v=vomuCMmoNyE - question 3 [32:22]

// Includes strings
// Write a function that takes two strings, A and B,
// and returns wether B is in A in a case-insensitive way.

// ** solution ** //

function stringIncludes (a, b) {
  return a.toLowerCase().includes(b.toLowerCase())
}

// tests
// stringIncludes("I drove to New York in a van with my friend.", "new")
