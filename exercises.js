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
}   else {
    alert("Your love score is " + loveScore + "%");
}
