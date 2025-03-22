/*Instructions:
-In Visual Studio Code, write the code that accomplishes the objectives listed below and ensures that the code compiles and runs as directed.
-Comment your code, to prove that you understand what you have written -- this is required!
-Create a new repository on GitHub for this week's assignments and push your code to the repository.
-Create a Video showcasing your assignment.
-Submit the two URL links for the GitHub repo and Video in the Text box.
Video Steps:
-Create a video, up to five minutes max, showing and explaining how your project works with an emphasis on the portions you contributed.
-This video should be done using screen share and voice over.
-This can easily be done using Zoom, although you don't have to use Zoom, it's just what we recommend.
    -You can create a new meeting, start screen sharing, and start recording.
    -This will create a video recording on your computer.
-This should then be uploaded to a publicly accessible site, such as YouTube.
    -Ensure the link you share is PUBLIC or UNLISTED!
    -If it is not accessible by your grader, your project will be graded based on what they can access.
*/
  /*  Coding Steps:
All questions should be printed to your Browser's console using console.log()

1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        -Do not use numbers to reference the last element, find it programmatically.
        -ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.
*/
//Step 1a: create an array called ages
console.log('Question 1a');
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //create array with appropriate ages
console.log('Ages', ages);
let minusAge = ages[ages.length - 1] - ages[0]; //reference last number of array
console.log('minusAge', minusAge);
//Step 1b: Subtracting out first from last, add new age then repeat
console.log('Question 1b');

ages.push(110); //added new age
console.log('Ages after pushing a new value', ages);
let minusAgePush = ages[ages.length -1] - ages[0]; //dynamic
console.log('minusAge', minusAgePush);
//Step 1c: Calculate average age using a loop
console.log('Question 1c');

let sumOfAges = 0; 
for (let i = 0; i < ages.length; i++) {
    //console.log(i, 'Test');
    sumOfAges += ages[i]; //add ages
    console.log('index', i, 'sumOfAges', sumOfAges);
}
    console.log("total sum", sumOfAges);
    let average = sumOfAges / ages.length; //sum of ages divided by number of ages
    console.log('Average', average);
/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
//Step 2a:
console.log('Question 2a');

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //Creat an array called names
let totalChars = 0; //calculate the average number of letters per name

for (let i = 0; i < names.length; i++) { // Add length of each name to totalChars
    //console.log(i, 'Test');
    totalChars += names[i].length;
    console.log('index:', i, 'name:', names[i], 'totalChars:', totalChars); 
}
let averageName = totalChars /  names.length;// compute the average by dividing total characters by number of names
console.log('Average of Names:', averageName); //Print average number of letters per name

//Step 2b:
console.log('Question 2b');

let concatNames = ''; //Concat all names together with spaces
for (let i = 0; i < names.length; i++) {
//console.log(i, 'test');
concatNames = concatNames.concat(names[i] + ' '); //concat each name followed by a space
console.log(i, 'Names concatenated', concatNames);
}

/*    
3. How do you access the last element of any array?
*/
console.log('Question 3');

console.log('Last element of ages array:', ages[ages.length - 1]);
/*
4. How do you access the first element of any array?
*/
console.log('Question 4');

console.log('First element of ages array:', ages[0]);

/*5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    For example:

    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array
*/
console.log('Question 5');

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    //console.log(i, 'test');
    nameLengths.push(names[i].length);
    console.log('Name lengths array:', nameLengths);
}
/*
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/
console.log('Question 6');

let charsTotal = 0;
for(let i = 0; i< nameLengths.length; i++) {
    //console.log(i, 'test');
    charsTotal += nameLengths[i];
    console.log('CharsTotal:', charsTotal);
}
/*
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/
console.log('Question 7');

function concatWords(word, n) {
        console.log('Word Par:', word, 'n Par', n); // Log parameters passed into the function
        let concat = word.repeat(n); //Use the repeat() method to concat the word n times
        console.log(concat); //Log concat result
}
concatWords('Hello', 3); //Call the function with 'Hello' and 3 as arguments
/*
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/
console.log('Question 8');

function fullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName; //Concat firstName and Last Name with a space in between
    console.log(fullName); //Log the full name
}
fullName('Kera', 'Lloyd'); //Call the function with 'Kera' and 'Lloyd' as arguments
/*
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/
console.log('Question 9');

//Define two example arrays
let numbers1 = [100, 250, 300, 450];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
    let total = 0; //Initialize total to store the sum of array elements
    for (let i = 0; i < array.length; i++) { //Llop through the array to sum its values
        //console.log(i, 'Test');
        total += array[i]; //Add the current array element to total
        console.log('Total:', total); //Log running total
    }
    if  (total > 100) { //check if the total sum is greater than 100
        console.log('Total:',  total, true); //Log and return tru if total is greater than 100
        return true;
    }else {
        console.log('Total:', total, false); //log and return false if total is 100 or less
        return false;
    }
}
sumNumbersArray(numbers2); //call the function with numbers2 as the argument
/*
10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/
console.log('Question 10');

function calculateNumbersAverage(array){
    let total = 0; //Initialize total to store the sum of array elements
    for (let i = 0; i < array.length; i++) { //loop through the array to sum its values
        //console.log(i, 'Test');
        total += array[i]; //Add the current array element to total
        console.log('Calculate Function, total:', total); //log running total
    }
    let average = total / array.length; //calculate the average by dividing the total by the number of elements
    console.log('Average of numbers:', average); //log the average value
    return average; //return the calculated average
}
calculateNumbersAverage(numbers1); //call the function with numbers1 as the argument
/*
11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/
console.log('Question 11');

//Define two example arrays
let numbers3 = [50, 29, 100];
let numbers4 = [400, 100, 50];

function twoAverages(array1,array2) {  
    console.log("Parameters:", array1, array2); //log the parameters passed to the function
    //Initialize variables to store the total sum of each array
    let total1 = 0;
    let total2 = 0;

    for (const number of array1) { //loop through the first array and sum the elements
        total1 += number; 
        console.log('Current Number:', number, 'Total1:', total1); //Log current number and running total for array1
    }
    for (const number of array2) { //loop through the second array and sum the elements
        total2 += number;
        console.log('Current Number loop2:', number, 'Total2:', total2); //log current number and running total for array2
    }
    //Calculate the averages for both arrays
    let average1 = total1 /array1.length;
    let average2 = total2 / array2.length;
    console.log('Averages:', average1, average2); //Log calculated averages
    //Compare the averages and return the result
    if (average1 > average2) {
        console.log(true);
        return true;
    }else if (average1 < average2) {
        console.log(false);
        return false;
    } else { //log if the averages are equal
        console.log("numers are equal");
    }
}
twoAverages(numbers3, numbers4); //Call the function with numbers3 and numbers4 as arguments
/*
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
console.log('Question 12');

function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log('Parameters:', isHotOutside, moneyInPocket); //log parameters passed to the function
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;//Check if its hot outside and if the money in pocke is greater than 10.5
    console.log('Buy a drink?', buyDrink); //log whether the conditions are met for buying a drink
    return buyDrink; //return the result (true or false)
}
willBuyDrink(true, 8); //call the function with the values true and 8
/*
13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/
//Write a function that tells me if I have enough money to go on a cruise. We are looking to go on a cruise in the summer and I need to know if I have enough money saved up*/
console.log('Question 13');

function canGoOnCruise(savings, cruiseCost) { //Function takes two parameters- how much is saved and cost of the cruise
    if (savings >= cruiseCost) {  //Checks to see is savings is greater than or equal to the cost of the cruise
        return "You get to go on a cruise!"; //If true, it tells you you can go
    } else {
        let amountNeeded = cruiseCost - savings;//Calculate how much more is needed
        return `You need $${amountNeeded.toFixed(2)} more to go on the cruise. Keep saving!`; //If false is tells you to keep saving
    }
}
//Call the function
console.log(canGoOnCruise(1500, 2000)); // Dont have enough money
console.log(canGoOnCruise(2500, 2000)); // Have enough money