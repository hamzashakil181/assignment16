// practice questions:
// chap 14-16

// Q1:  Declare an empty array using JS literal notation to store student names in future
// ans: var studentNames = [];


// Q2:Declare an empty array using JS object notation to store student names in future
// ans: var studentNames = new Array();


// Q3: Declare and initialize a strings array. 
// ans: var fruits = ["apple", "banana", "cherry"];


// Q4: Declare and initialize a numbers array. 
// ans: var numbers = [1, 2, 3, 4, 5];


// Q5:Declare and initialize a boolean array. 
// ans: var  booleanArray = [true, false, true, false];


// Q6: Declare and initialize a mixed array
// ans: var  mixedArray = [42, "hello", true, null, "John" , [1, 2, 3]];


// Q7: Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// ans: var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];


// Q8:Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students 
// ans:
 // Step 1: Declare and initialize the arrays
// var studentNames = ["Alice", "Bob", "Charlie"];
// var scores = [450, 375, 480]; // Scores out of 500

// // Step 2: Calculate and display the scores and percentages
// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / 500) * 100; // Calculate percentage
//     console.log(`Student Name: ${studentNames[i]}`);
//     console.log(`Score: ${scores[i]} out of 500`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`); // Display percentage
//     console.log('-------------------------'); // Separator for better readability
// }


// // Q9: Initialize an array with color names. Display the array elements in your browser.
//  a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
//     colors.unshift(colorToAddBeginning);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);

// c. Add two more color to the beginning of the array. Display the updated array in your browser. 
// colors.unshift("Pink", "Cyan");

// d. Delete the first color in the array. Display the updated array in your browser. 
// colors.shift();

// e. Delete the last color in the array. Display the updated array in your browser. 
// colors.pop();

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
// var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// var colorToAdd = prompt("Enter the color you want to add:");
// colors.splice(indexToAdd, 0, colorToAdd);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 
// var indexToDelete = parseInt(prompt("Enter the index at which you want to delete color(s):"));
// var numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"));
// colors.splice(indexToDelete, numberOfColorsToDelete);


// Q10:Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
//  ans: var studentScores = [75, 88, 92, 60, 45, 81, 100, 67];
// console.log("Original Scores:", studentScores);
// studentScores.sort(function(a, b) {
//     return a - b; // Compare numbers for ascending order
// });
// console.log("Sorted Scores:", studentScores);


// Q11:Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
// ans: var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
// var selectedCities = cities.slice(0, 3);
// console.log("Original Cities:", cities);
// console.log("Selected Cities:", selectedCities);


// Q12: Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
//  ans: var arr = ["This ", "is ", "my ", "cat"];
// var singleString = arr.join(""); 
// console.log(singleString);


// Q13:Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 
// ans:var fifoQueue = [];
// fifoQueue.push("Value 1");
// fifoQueue.push("Value 2"); 
// fifoQueue.push("Value 3"); 
// console.log(fifoQueue.shift()); 
// console.log(fifoQueue.shift()); 
// console.log(fifoQueue.shift()); 
// console.log("Current Queue State:", fifoQueue); 

// Q14: Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
// ans: var lifoStack = [];
// lifoStack.push("Value 1");
// lifoStack.push("Value 2"); 
// lifoStack.push("Value 3");
// console.log(lifoStack.pop()); 
// console.log(lifoStack.pop()); 
// console.log(lifoStack.pop()); 
// console.log("Current Stack State:", lifoStack);


// Q15:Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
// ans:
    // var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    // document.write("<label for='manufacturers'>Choose a phone manufacturer:</label>");
    // document.write("<select id='manufacturers'>");
    // document.write("<option value='" + manufacturers[0] + "'>" + manufacturers[0] + "</option>");
    // document.write("<option value='" + manufacturers[1] + "'>" + manufacturers[1] + "</option>");
    // document.write("<option value='" + manufacturers[2] + "'>" + manufacturers[2] + "</option>");
    // document.write("<option value='" + manufacturers[3] + "'>" + manufacturers[3] + "</option>");
    // document.write("<option value='" + manufacturers[4] + "'>" + manufacturers[4] + "</option>");
    // document.write("<option value='" + manufacturers[5] + "'>" + manufacturers[5] + "</option>");
    // document.write("</select>");
    