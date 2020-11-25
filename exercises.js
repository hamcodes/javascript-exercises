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