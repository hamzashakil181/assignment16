// practice questions:
// chap 17-20

// Q1:Declare and initialize an empty multidimensional array. (Array of arrays) 
// ans: // Declare and initialize an empty multidimensional array
// var multiArray = [];
// multiArray[0] = []; 
// multiArray[1] = []; 
// multiArray[2] = []; 
// var multiArrayDirect = [[], [], []];
// multiArray[0].push("Value 1");
// multiArray[1].push("Value 2");
// multiArray[2].push("Value 3");
// console.log(multiArray); 
// console.log(multiArrayDirect);


// Q2:Declare and initialize a multidimensional array representing the following matrix
// ans:matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// Q4:Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user. 
// ans:
// var number = prompt("Enter a number to show its multiplication table:");
// var length = prompt("Enter the length of the multiplication table:");

// for (var i = 1; i <= length; i++) {
//   console.log(number + " x " + i + " = " + number * i);
// }


// Q5: Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
// // ans:
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]); 
// }

// Q6: Generate the following series in your browser. See example output. 

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// var counting = [];
// for (var i = 1; i <= 15; i++) {
//     counting.push(i);
  
//   console.log(counting);

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// var reverseCounting = [];
// for (var i = 10; i >= 1; i--) {
//   reverseCounting.push(i);
// }
// console.log(reverseCounting); 


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// var even = [];
// for (var i = 0; i <= 20; i += 2) {
//   even.push(i);
// }
// console.log(even); 


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// var odd = [];
// for (var i = 1; i <= 19; i += 2) {
//   odd.push(i);
// }
// console.log(odd);


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 
// var series = [];
// for (var i = 2; i <= 20; i += 2) {
//   series.push(`${i}k`);
// }
// console.log(series);


// Q7:  You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
// // ans:
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchBakery(item) {
//   for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i].toLowerCase() === item.toLowerCase()) {
//       return i; 
//     }
//   }
//   return -1; 
// }

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// var itemIndex = searchBakery(userInput);

// if (itemIndex !== -1) {
//   alert(`"${userInput}" is available at index ${itemIndex} in our bakery`);
// } else {
//   alert(`Sorry, "${userInput}" is not available in our bakery right now.`);
// } 


// Q8: Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 
// //  ans:
// var A = [24, 53, 78, 91, 12];

// // Method 1: Using a loop
// function findLargestWithLoop(arr) {
//   if (arr.length === 0) {
//     return "The array is empty."; 
//   }

//   var largest = arr[0]; // Assume the first element is the largest initially

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// // Method 2: Using Math.max
// function findLargestWithMathMax(arr) {
//   if (arr.length === 0) {
//     return "The array is empty.";
//   }
//   return Math.max(...arr);
// }

// console.log("Largest number (using loop):", findLargestWithLoop(A));
// console.log("Largest number (using Math.max):", findLargestWithMathMax(A)); 


// Q9: Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 
// ans:
// var A = [24, 53, 78, 91, 12];

// var smallest = A[0];

// for (var i = 0; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// console.log("Smallest number:", smallest);

// Q10: Write a program to print multiples of 5 ranging 1 to 100. 
//  ans: 
 for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}