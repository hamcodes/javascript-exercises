// function to see how many days, weeks and years you have left if you lived until 100 years old based on your current age
function getAge(numberOfYears) {
  var age = 100 - numberOfYears;
  var days = age * 365;
  var weeks = age * 52;
  var months = age * 12;
  console.log("You have " + days + " days left, " + weeks + " weeks left, and " + months + " months left.");
}

getAge(12);


// function to see remained of money spent to purchase an item
function getMilk(money) {
  var numberOfBottles = Math.floor(money / 1.5);
  return money % 1.5;
}

getMilk(4);

// function to test the bmi given inputs, rounded to the nearest whole number
function bmiCalculator(weight, height) {
  return Math.round(weight / (height * height));
}

// function to create a "love calculator based on inputs"
function loveCalc() {
  var n = Math.random();
   n = n * 100;
   n = Math.floor(n) + 1;
   promptOne = prompt("Enter the first name who wants love");
   promptTwo = prompt("Enter the second name who wants love");
   alert(promptOne + " and " + promptTwo + " have a " + n + " % love score");
}
loveCalc();

// love calculator with if/else statements
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + " You love each other ver much!");
}   

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + " You go together like oil and water.")
} 


// function to determine whether a year is a leap year
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
    }


// fizzbuzz function
var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } 
  else if (count % 3 === 0) {
    output.push("Fizz");
  }
   else if (count % 5 === 0) {
    output.push("Buzz");
  }
  else {
  output.push(count);
  }
  count++;
  console.log(output);
}

// function to pick random element from array
var names = ["Angela", "Jeremy", "Dan", "Bob"];
function whosPaying(names) {
  return names[Math.floor(Math.random()*names.length)];
}
whosPaying(names) + " is going to buy lunch today!";

//function using while loop
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//function to calculate fibonacci
function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  }
  else if (n === 2) {
    output = [0, 1];
  }
  else {
    output = [0,1];
  
    for(var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
   }
  
  return output;
  }
  fibonacciGenerator(10);