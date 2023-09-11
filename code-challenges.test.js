// ASSESSMENT 2: Coding Practical Questions with Jest

// const { log } = require("console")
// const { describe } = require("yargs")

// 

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("evenlyDivThree", () => {
    it("returns if the number inside it is evenly divisible by three or not", () => {
         const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"  
        expect(evenlyDivThree(object1)).toEqual("15 is divisible by three")
        expect(evenlyDivThree(object2)).toEqual("0 is divisible by three")
        expect(evenlyDivThree(object3)).toEqual("-7 is not divisible by three")

    })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// Name: evenlyDivThree
// Input: Three objects
// Output: returns a string stating if object is divisible by three or not
// Process: Using a modulo operator to do the division.
    // Using string interpolation to say that the variable is or isn't divisable by three
    // conditional statement to output string if coditions are met

const evenlyDivThree = (value) => {
    //  console.log('evenlyDivThree !!!!!!!!');
    //  console.log(value.number);
    if(value.number % 3 === 0) { 
        return `${value.number} is divisible by three`
        } else { 
        return `${value.number} is not divisible by three`    
   }
}  

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("toCapArr", () =>{
//     it("returns an array with all the words capitalized", () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//         // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//         expect(toCapArr(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(toCapArr(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
        
//     })
// })


// b) Create the function that makes the test pass.

// Pseudo code:
// Name: toCapArr
// Input: array
// Output: array's values capitilized 
// Process: iterate through array using .map() and capitilize using .toUpperCase() .charAt() to isolate and capitlize first character. And then the .concat() to combine the values.


const toCapArr = (arr) => {
    return arr.map((value) => {
    
        const capitlizedLetter = value.charAt(0).toUpperCase()
        const slicedWord = value.slice(1)
        
        return capitlizedLetter.concat(slicedWord)
    })
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("vowelIndex",() =>{
    it("logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(vowelIndex(vowelTester1)).toEqual(1)
        expect(vowelIndex(vowelTester2)).toEqual(0)
        expect(vowelIndex(vowelTester3)).toEqual(2)
    })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// Name: vowelIndex 
// Input: string
// Output: logs the index of the first vowel.
// Process: using an array with a string as it's value 
//  Iterate through the array using .filter() to filter through array for vowels to log the index. Edit: .filter did not work because it created a subset. I instead used  a for loop to iterate the array. Also made another variable with a array of vowels and .includes to check if string value had any. Used .indexOf() to return index of first vowel and a conditional statement to execute the logic.


const vowelIndex = (array) => {
    const vowels = ["a", "e","i", "o", "u"] 
    for (let i = 0; i < array.length; i++ ){
        const  currentValue = array[i];
        if( vowels.includes(currentValue)) {
         return  array.indexOf(currentValue)
        } 
    }       
}