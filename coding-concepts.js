// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
console.log(cohort.split(""))

// a) Your answer:An array of each character
// b) Verify and explain:
// Output:  an array of each chararter because seperator was a empty string and that converts to an array
//  [
//   'F', 'o', 'x', 't',
//   'r', 'o', 't', ' ',
//   '2', '0', '2', '3'
// ]

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: Undefined because string interpolation is looking for a variable and not a string so that will cause the parameter structure to be undefined

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: undefined
// b) Verify and explain: [ 8, 10, 12, 14, 16 ] because parameter number doesn't need a call back argument since it's not a function.   (nice one you got me lol)

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: return array with odd numbers
// b) Verify and explain:[ 11, 13, 15 ] because .filter creates a subset array  and % 2 bang operator == 0 equals to odd numbers

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: JavaScript because myCodingSkills was invoked with the key of languages at the 0 index

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:undefined
// b) Verify and explain: Learn { student: 'George', cohort: 'Echo', year: 2023 } because you can acces the class as a object with new and "George" passed as a parameter 

//* I thought it would return undefined because missing dot notaion with the invocation. This was just me reading things to fast.
