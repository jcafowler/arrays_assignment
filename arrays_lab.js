// ## Exercises

// ## 1. Problem One - Fruits array

// a. Add "mango" to the end of a fruits array ["strawberry", "banana"].

// b. Add "blueberry" to the front of the same fruits array.

// c. Remove the last element of the fruits array.

// d. console.log the length of the fruits array.

// e. Remove the first element of the fruits array.

// f. Join all the elements in the fruits array with a '$'.

// let fruits = ["strawberry", "banana"];
// fruits.push("mango");
// fruits.unshift("blueberry");
// fruits.pop();
// console.log(fruits.length);
// fruits.shift();
// console.log(fruits.join("$"));

// ## 2. Problem Two - Larger array

// Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"

// let firstArr = [1,2,3,5,]
// let secondArr = [1,5,2,4]

// if (firstArr.length > secondArr.length){
//     console.log( firstArr)
// }else if( secondArr.length > firstArr.length){
//     console.log (secondArr)
// }else console.log ("They are the same size")

// ## 3. Problem Three - Middle element

// Given an array, log its middle element.  If the middle of the array is between two elements, log both of them.

// let testArray = [1,2,3,4,5,6]
// if (testArray.length % 2 === 0){
//     console.log (testArray[(testArray.length / 2)-1] + "," + String(testArray[((testArray.length / 2) + 1) - 1]))
// } else console.log (testArray[(Math.round(testArray.length / 2)- 1)])

// ## 4. Problem Four - Iterate over an array

// a. Write code that logs every value in an array using a `for` loop
// let arr = ["red", "blue", "yellow"]
// for (let i = 0; i < arr.length; i++){
//     console.log (arr[i])
// }
// // b. Write code that logs every value in an array using a `while` loop
// let i = 0
// while (i < arr.length){
//     console.log (arr[i])
//     i++
// }
// // c. Write code that logs every value in an array using a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
// for (const i2 of arr){
//     console.log (i2)
// }
// ## 5. Problem Five - Sum of array

// Given an array of numbers, write code that logs the sum of all the numbers
// let sum = 0
// let arrayFour = [18,14,4,5]
// for (let i = 0; i < arrayFour.length; i++){
//     sum+= arrayFour[i]
// }
// console.log(sum)


// ## 6. Problem Six - Log odd/even numbers

// a. Given an array of numbers, write code that logs all the odd numbers

// let evenAndOddArr = [1,5,2,4,11,12,99,100]
// let emptyArr = []
// for (let i = 0; i < evenAndOddArr.length; i++) {
//     if (evenAndOddArr[i] % 2 > 0) {
//         emptyArr.push(evenAndOddArr[i]);
//     }
// }
// console.log(emptyArr)

// b. Given an array of numbers, write code that logs the sum of all the even numbers

// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// let sum = 0
// for (let i = 0; i < evenAndOddArrToSum.length; i++) {
//     if (evenAndOddArrToSum[i] % 2 === 0) {
//         sum += evenAndOddArrToSum[i];
//     }
// }
// console.log(sum)

// ## 7. Problem Seven - Smallest value

// Given an array of numbers, write code that logs the smallest value

// let arr = [4,3,7,29,40]
// let emptyVar = arr[0]
// for (let i = 0; i < arr.length; i++){
//     if (emptyVar > arr[i]) {
//         emptyVar = arr[i]
//     } 
// }   
// console.log(emptyVar)

// ## 8. Problem Eight - Second smallest value

// Find the second smallest number in an Array of Ints

// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
// let smallestNumber = secondSmallestArr[0]
// let secondSmallestNumber = smallestNumber
// for (let i = 0; i < secondSmallestArr.length; i++) {
//     if (smallestNumber > secondSmallestArr[i]) {
//         secondSmallestNumber = smallestNumber
//         smallestNumber = secondSmallestArr[i]
//     } else if ( secondSmallestArr[i] < secondSmallestNumber && secondSmallestNumber > smallestNumber){
//         secondSmallestNumber=secondSmallestArr[i]
//     }
// } console.log(smallestNumber)
// console.log (secondSmallestNumber)
// ## 9. Problem Nine - Duplicates
// Write code such that noDupeList has all the same numbers as dupeFriendlyList, but has no more than one of each number.

let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
let noDupeList = []
for (let i = 0; i < dupeFriendlyList.length; i++){
    if (noDupeList.includes(dupeFriendlyList[i])){
        continue;
    } else noDupeList.push(dupeFriendlyList[i])
}
console.log(noDupeList)